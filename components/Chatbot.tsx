
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

// --- SVG Icons ---
const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const BotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"></path><rect x="4" y="12" width="8" height="8" rx="2"></rect><path d="M20 12v4h-4"></path><path d="M16 12a4 4 0 1 1-8 0"></path></svg>
);


interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: "Hello! I'm an AI assistant for Serene Pathways. How can I help you today? Please note, I cannot provide medical advice." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            inputRef.current?.focus();
        }
    }, [isOpen, messages]);

    const handleSendMessage = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userMessage.text,
                config: {
                   systemInstruction: "You are a friendly and helpful AI assistant for Serene Pathways Therapy. You can answer general questions about therapy, mental health topics, and the services offered. You are not a therapist and cannot provide medical advice. If a user asks for medical advice or seems to be in crisis, you must direct them to a professional or a crisis hotline like the National Suicide Prevention Lifeline at 1-800-273-8255. Keep your answers supportive, concise, and easy to understand."
                }
            });

            const aiMessage: Message = { sender: 'ai', text: response.text };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error fetching response from Gemini:", error);
            const errorMessage: Message = { sender: 'ai', text: "I'm sorry, I'm having trouble connecting right now. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Window */}
            <div className={`fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] bg-off-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-deep-sage rounded-t-2xl text-white">
                    <h3 className="font-bold text-lg">AI Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-off-white">
                        <CloseIcon />
                    </button>
                </div>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                           {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-deep-sage flex-shrink-0 flex items-center justify-center"><BotIcon /></div>}
                           <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-sky-blue/50 rounded-br-none' : 'bg-light-gray rounded-bl-none'}`}>
                                <p className="text-sm text-charcoal" style={{whiteSpace: 'pre-wrap'}}>{msg.text}</p>
                           </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                             <div className="w-8 h-8 rounded-full bg-deep-sage flex-shrink-0 flex items-center justify-center"><BotIcon /></div>
                            <div className="max-w-[80%] p-3 rounded-2xl bg-light-gray rounded-bl-none">
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-charcoal/50 rounded-full animate-bounce delay-0"></span>
                                    <span className="w-2 h-2 bg-charcoal/50 rounded-full animate-bounce delay-150"></span>
                                    <span className="w-2 h-2 bg-charcoal/50 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                {/* Input */}
                <div className="p-4 border-t border-light-gray">
                    <form className="flex items-center gap-2" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="w-full rounded-full border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage px-4 py-2"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading} className="bg-deep-sage text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-deep-sage disabled:bg-opacity-50">
                            <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
            {/* FAB Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-burnt-sienna text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-burnt-sienna focus-visible:ring-offset-off-white"
                aria-label="Toggle AI Chatbot"
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>
        </>
    );
};

export default Chatbot;
