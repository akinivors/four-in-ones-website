import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

//
// THIS IS THE NAMED EXPORT NEXT.JS REQUIRES
// (The old file might have had "export default async function...")
//
export async function POST(request: Request) {
  try {
    const { 
      sessionId, 
      query, 
      response, 
      intent, 
      source, 
      confidence, 
      procedureContext 
    } = await request.json();

    // Save to Supabase
    const { error } = await supabase
      .from('chatbot_logs')
      .insert([
        { 
          session_id: sessionId,
          query: query,
          response: response,
          intent: intent,
          source: source,
          confidence: confidence,
          procedure_context: procedureContext
        }
      ]);

    if (error) {
      console.error('Supabase logging error:', error);
      // We return 200 even if logging fails, 
      // because we don't want to break the chatbot UI
      return NextResponse.json({ logged: false }, { status: 200 });
    }

    return NextResponse.json({ logged: true }, { status: 200 });

  } catch (error) {
    console.error('Chat logging error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}