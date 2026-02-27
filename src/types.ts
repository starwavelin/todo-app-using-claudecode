export type Priority = 'low' | 'medium' | 'high';
export type Todo = { id: number; text: string; completed: boolean; priority: Priority };
export type Filter = 'all' | 'active' | 'completed';
