abstract class RamaPC
{
    hijos : ComponentePC[] | null = null
    addComponente(comp : ComponentePC)
    {
        // Lazy initialization
        if (this.hijos == null)
        {
            this.hijos = []
        }
        this.hijos.push(comp)
    }
}

interface ComponentePC
{
    calcularPrecio() : number
}

class Computador extends RamaPC implements ComponentePC
{
    calcularPrecio() : number
    {
        let sumaPrecios = 0
        if (this.hijos != null)
        {
            for (let i=0; i < this.hijos.length; i++)
            {
                let precioHijo = this.hijos[i].calcularPrecio()
                sumaPrecios += precioHijo
            }
        }
        return sumaPrecios
    }
}

class Monitor implements ComponentePC
{
    calcularPrecio() : number
    {
        return 200
    }
}

class Mouse implements ComponentePC
{
    calcularPrecio() : number
    {
        return 20
    }
}

class Case extends RamaPC implements ComponentePC
{
    calcularPrecio() : number
    {
        let sumaPrecios = 0
        if (this.hijos != null)
        {
            for (let i=0; i < this.hijos.length; i++)
            {
                let precioHijo = this.hijos[i].calcularPrecio()
                sumaPrecios += precioHijo
            }
        }
        return sumaPrecios
    }
}

class Teclado implements ComponentePC
{
    calcularPrecio() : number
    {
        return 20
    }
}

class Memoria implements ComponentePC
{
    calcularPrecio() : number
    {
        return 90
    }
}

class Placa implements ComponentePC
{
    calcularPrecio() : number
    {
        return 100
    }
}

class TarjetaGrafica implements ComponentePC
{
    calcularPrecio() : number
    {
        return 180
    }
}

class Disco implements ComponentePC
{
    calcularPrecio() : number
    {
        return 120
    }
}

class Procesador implements ComponentePC
{
    calcularPrecio() : number
    {
        return 450
    }
}

let mainComposite = () => {
    //1. Definir la estructura
    let comp : Computador = new Computador()
    let monitor : ComponentePC = new Monitor()
    let teclado : ComponentePC = new Teclado()
    let mouse : ComponentePC = new Mouse()
    let c : Case = new Case()
    let memoria : ComponentePC = new Memoria()
    let tg : ComponentePC = new TarjetaGrafica()
    let disco : ComponentePC = new Disco()
    let proc : ComponentePC = new Procesador()
    let placa : ComponentePC = new Placa()

    c.addComponente(memoria)
    c.addComponente(tg)
    c.addComponente(disco)
    c.addComponente(proc)
    c.addComponente(placa)

    comp.addComponente(monitor)
    comp.addComponente(teclado)
    comp.addComponente(mouse)
    comp.addComponente(c)

    //2. Ejecutar alguna accion sobre la estructura
    let precioTotal = comp.calcularPrecio()
    console.log(`El precio Total es : ${precioTotal}`)
}
mainComposite()