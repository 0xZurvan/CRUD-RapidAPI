
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          age: number | null
          created_at: string | null
          id: number
          name: string | null
          occupation: string | null
        }
        Insert: {
          age?: number | null
          created_at?: string | null
          id?: number
          name?: string | null
          occupation?: string | null
        }
        Update: {
          age?: number | null
          created_at?: string | null
          id?: number
          name?: string | null
          occupation?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}