export interface Segment {
    id?: string;
    idealStrategyId?: string | null;
    name: string;
    realStrategyId?: string;
    value: number;
  }
  
export default interface RealStrategy {
    id?: string;
    realWalletId?: string;
    segments: Segment[]; // Array of Segment objects
}