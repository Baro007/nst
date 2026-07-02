
export type DecelerationType = 'early' | 'late' | 'variable' | 'prolonged' | 'sinusoidal';
export type VariabilityType = 'absent' | 'minimal' | 'moderate' | 'marked';

export interface TraceData {
  contraction: string;
  fhr: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizCase {
  id: string;
  title: string;
  description: string;
  gestationalWeek: string;
  traceType: DecelerationType | 'normal';
  variabilityType: VariabilityType;
  baselineBpm: number;
  questions: QuizQuestion[];
}