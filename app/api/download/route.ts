import { NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function GET() {
  try {
    const backendRes = await fetch(`${BASE_URL}/api/newspaper`)

    if (!backendRes.ok) {
      return new NextResponse('Errore dal backend', { status: 500 })
    }

    const buffer = await backendRes.arrayBuffer()

    return new NextResponse(Buffer.from(buffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="newspaper.pdf"',
      },
    })
  } catch (error) {
    console.error('Errore durante il download proxy:', error)
    return new NextResponse('Errore interno', { status: 500 })
  }
}
