
import { GoogleGenAI, Type } from "@google/genai";
import { AI_TOOLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSmartRecommendation(query: string): Promise<{ text: string }> {
  const toolsContext = AI_TOOLS.map(t => `${t.name} (${t.category}): ${t.description}`).join('\n');
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `User is looking for an AI tool: "${query}". 
    Based on our directory:
    ${toolsContext}
    
    Recommend the best 2-3 tools from the list. If none match perfectly, suggest the closest ones. Be concise and helpful.`,
    config: {
      temperature: 0.7,
      systemInstruction: "You are AI Nexus Assistant, a helpful guide for finding the best AI tools."
    }
  });

  return { text: response.text || "Sorry, I couldn't find a recommendation right now." };
}
