
export type DecelerationType = 'early' | 'late' | 'variable';
export type VariabilityType = 'absent' | 'minimal' | 'moderate' | 'marked';

export interface TraceData {
  contraction: string;
  fhr: string;
}