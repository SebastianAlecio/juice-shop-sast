import { type Request, type Response } from 'express'

// Archivo de demostracion (Parte D): version corregida, sin eval
export function calcular () {
  return (req: Request, res: Response) => {
    // solo se aceptan operaciones simples entre dos numeros
    const m = /^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)\s*$/.exec(String(req.query.expr))
    if (!m) {
      res.status(400).json({ error: 'Expresion no valida' })
      return
    }
    const a = Number(m[1])
    const b = Number(m[3])
    const operaciones: Record<string, number> = { '+': a + b, '-': a - b, '*': a * b, '/': a / b }
    res.json({ resultado: operaciones[m[2]] })
  }
}
