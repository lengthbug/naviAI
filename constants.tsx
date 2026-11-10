
import React from 'react';
import { CategoryType, AITool } from './types';

export const CATEGORIES_CONFIG = [
  { type: CategoryType.CREATION, icon: '✍️', color: 'from-blue-500 to-cyan-400' },
  { type: CategoryType.DRAWING, icon: '🎨', color: 'from-purple-500 to-pink-400' },
  { type: CategoryType.VIDEO, icon: '🎬', color: 'from-red-500 to-orange-400' },
  { type: CategoryType.RESEARCH, icon: '🔬', color: 'from-emerald-500 to-teal-400' },
  { type: CategoryType.ANIMATION, icon: '🏃', color: 'from-amber-500 to-yellow-400' },
  { type: CategoryType.VOICE, icon: '🎙️', color: 'from-indigo-500 to-blue-400' },
  { type: CategoryType.PUZZLE, icon: '🧩', color: 'from-lime-500 to-green-400' },
  { type: CategoryType.ROBOTICS, icon: '🤖', color: 'from-slate-500 to-gray-400' },
  { type: CategoryType.DEVELOPMENT, icon: '🧪', color: 'from-blue-500 to-indigo-400' },
];

export const AI_TOOLS: AITool[] = [
  // Creation
  { id: 'chatgpt', name: 'ChatGPT', description: 'OpenAI\'s powerful conversational AI for text generation and reasoning.', category: CategoryType.CREATION, url: 'https://chat.openai.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', tags: ['text', 'llm'] },
  { id: 'claude', name: 'Claude', description: 'Anthropic\'s safe and high-performance language model.', category: CategoryType.CREATION, url: 'https://claude.ai', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Claude_AI_logo.svg', tags: ['text', 'coding'] },
  { id: 'notion-ai', name: 'Notion AI', description: 'Writing assistant directly integrated into Notion workspace.', category: CategoryType.CREATION, url: 'https://notion.so/product/ai', icon: 'https://picsum.photos/id/1/200/200', tags: ['writing', 'productivity'] },
  
  // Drawing
  { id: 'midjourney', name: 'Midjourney', description: 'Leading artistic image generator known for high-quality aesthetics.', category: CategoryType.DRAWING, url: 'https://midjourney.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.svg', tags: ['art', 'images'] },
  { id: 'dalle3', name: 'DALL-E 3', description: 'OpenAI\'s native image generation built into ChatGPT.', category: CategoryType.DRAWING, url: 'https://openai.com/dall-e-3', icon: 'https://picsum.photos/id/10/200/200', tags: ['images', 'openai'] },
  { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Open-source image generation model by Stability AI.', category: CategoryType.DRAWING, url: 'https://stability.ai', icon: 'https://picsum.photos/id/20/200/200', tags: ['open-source', 'art'] },
  
  // Video
  { id: 'runway', name: 'Runway Gen-2', description: 'Advanced AI video generation from text or images.', category: CategoryType.VIDEO, url: 'https://runwayml.com', icon: 'https://picsum.photos/id/30/200/200', tags: ['video', 'editing'] },
  { id: 'pika', name: 'Pika Labs', description: 'Creative AI video generation platform with high control.', category: CategoryType.VIDEO, url: 'https://pika.art', icon: 'https://picsum.photos/id/40/200/200', tags: ['video', 'creative'] },
  { id: 'heygen', name: 'HeyGen', description: 'AI video generation for talking avatars and business videos.', category: CategoryType.VIDEO, url: 'https://heygen.com', icon: 'https://picsum.photos/id/50/200/200', tags: ['avatars', 'marketing'] },
  
  // Research
  { id: 'perplexity', name: 'Perplexity', description: 'AI-powered search engine that provides cited answers.', category: CategoryType.RESEARCH, url: 'https://perplexity.ai', icon: 'https://picsum.photos/id/60/200/200', tags: ['search', 'citations'] },
  { id: 'elicit', name: 'Elicit', description: 'Research assistant that automates literature reviews.', category: CategoryType.RESEARCH, url: 'https://elicit.org', icon: 'https://picsum.photos/id/70/200/200', tags: ['science', 'literature'] },
  { id: 'consensus', name: 'Consensus', description: 'Search engine for finding scientific answers based on papers.', category: CategoryType.RESEARCH, url: 'https://consensus.app', icon: 'https://picsum.photos/id/80/200/200', tags: ['science', 'research'] },
  
  // Animation
  { id: 'luma', name: 'Luma Dream Machine', description: 'High-fidelity video and 3D object generation.', category: CategoryType.ANIMATION, url: 'https://lumalabs.ai', icon: 'https://picsum.photos/id/90/200/200', tags: ['3d', 'video'] },
  { id: 'kling', name: 'Kling AI', description: 'Advanced Chinese AI video model capable of complex motion.', category: CategoryType.ANIMATION, url: 'https://klingai.com', icon: 'https://picsum.photos/id/100/200/200', tags: ['video', 'realism'] },
  
  // Voice
  { id: 'elevenlabs', name: 'ElevenLabs', description: 'The most realistic AI speech and voice cloning.', category: CategoryType.VOICE, url: 'https://elevenlabs.io', icon: 'https://picsum.photos/id/110/200/200', tags: ['tts', 'voice'] },
  { id: 'suno', name: 'Suno AI', description: 'Generate high-quality songs and music from simple text.', category: CategoryType.VOICE, url: 'https://suno.com', icon: 'https://picsum.photos/id/120/200/200', tags: ['music', 'audio'] },
  { id: 'udio', name: 'Udio', description: 'Advanced music generation for studio-quality tracks.', category: CategoryType.VOICE, url: 'https://udio.com', icon: 'https://picsum.photos/id/130/200/200', tags: ['music', 'vocals'] },
  
  // Puzzle
  { id: 'pi', name: 'Pi AI', description: 'Personal AI designed to be kind and supportive.', category: CategoryType.PUZZLE, url: 'https://pi.ai', icon: 'https://picsum.photos/id/140/200/200', tags: ['companion', 'logic'] },
  { id: 'character-ai', name: 'Character.ai', description: 'Converse with specialized characters and historical figures.', category: CategoryType.PUZZLE, url: 'https://character.ai', icon: 'https://picsum.photos/id/150/200/200', tags: ['roleplay', 'fun'] },
  
  // Robotics
  { id: 'figure', name: 'Figure AI', description: 'Creating the world\'s first commercially viable humanoid robot.', category: CategoryType.ROBOTICS, url: 'https://figure.ai', icon: 'https://picsum.photos/id/160/200/200', tags: ['humanoid', 'future'] },
  { id: 'tesla-optimus', name: 'Tesla Optimus', description: 'General-purpose, bi-pedal, humanoid robot by Tesla.', category: CategoryType.ROBOTICS, url: 'https://tesla.com/optimus', icon: 'https://picsum.photos/id/170/200/200', tags: ['robotics', 'tesla'] },
  { id: 'boston-dynamics', name: 'Boston Dynamics', description: 'Pushing the boundaries of what robots can do.', category: CategoryType.ROBOTICS, url: 'https://bostondynamics.com', icon: 'https://picsum.photos/id/180/200/200', tags: ['atlas', 'spot'] },
  {"id": "agent-qa", "name": "agent-qa", "description": "Natural-language web/mobile QA with persistent memory, validated self-improvement, and step/screenshot evidence.", "category": CategoryType.DEVELOPMENT, "url": "https://vostride.com", "icon": "https://vostride.com/brand/vostride-pixel-icon-192.png", "tags": ["QA", "memory", "self-improving"]},
];
