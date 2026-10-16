import { type Request, type Response } from 'express'

// Archivo de demostracion (Parte D): vulnerabilidad intencional
export function calcular () {
  return (req: Request, res: Response) => {
    const resultado = eval(req.query.expr as string) // eval con parametro de la peticion
    res.json({ resultado })
  }
}
