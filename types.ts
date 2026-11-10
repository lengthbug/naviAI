
export enum CategoryType {
  CREATION = "创作类",
  DRAWING = "绘画类",
  VIDEO = "视频类",
  RESEARCH = "科研类",
  ANIMATION = "动画类",
  VOICE = "语音类",
  PUZZLE = "益智类",
  ROBOTICS = "机器人类",
  DEVELOPMENT = "开发与测试"
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: CategoryType;
  url: string;
  icon: string;
  tags: string[];
}

export interface RecommendationResponse {
  recommendedTools: string[];
  reasoning: string;
}
