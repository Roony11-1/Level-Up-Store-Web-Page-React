import { Producto } from "../../model/Producto";

export function ProductosFalsos() 
{
    return [
        new Producto()
            .setId(1)
            .setCodigo("JM001")
            .setNombre("Catan")
            .setDescripcion("Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.")
            .setCategoria("Juegos de Mesa")
            .setPrecio(29990)
            .setImagen("/productos/catan.png")
            .setCantidad(10)
            .setMarca("Kosmos"),

        new Producto()
            .setId(2)
            .setCodigo("JM002")
            .setNombre("Carcassonne")
            .setDescripcion("Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.")
            .setCategoria("Juegos de Mesa")
            .setPrecio(24990)
            .setImagen("/productos/carcassonne.png")
            .setCantidad(10)
            .setMarca("Hans im Glueck"),

        new Producto()
            .setId(3)
            .setCodigo("AC001")
            .setNombre("Controlador Inalámbrico Xbox Series X")
            .setDescripcion("Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.")
            .setCategoria("Accesorios")
            .setPrecio(59990)
            .setImagen("/productos/control_xbox.png")
            .setDestacado(true)
            .setCantidad(10)
            .setMarca("Microsoft"),
            

        new Producto()
            .setId(4)
            .setCodigo("AC002")
            .setNombre("Auriculares Gamer HyperX Cloud II")
            .setDescripcion("Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.")
            .setCategoria("Accesorios")
            .setPrecio(79990)
            .setImagen("/productos/audifonosCloud.png")
            .setCantidad(10)
            .setMarca("HyperX"),

        new Producto()
            .setId(5)
            .setCodigo("CO001")
            .setNombre("PlayStation 5")
            .setDescripcion("La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.")
            .setCategoria("Consolas")
            .setPrecio(549990)
            .setImagen("/productos/ps5.png")
            .setCantidad(10)
            .setMarca("Sony"),

        new Producto()
            .setId(6)
            .setCodigo("CG001")
            .setNombre("Notebook Gamer ASUS ROG Strix")
            .setDescripcion("Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.")
            .setCategoria("Computadores Gamers")
            .setPrecio(1299990)
            .setImagen("/productos/pcAsus.png")
            .setDestacado(true)
            .setCantidad(10)
            .setMarca("Asus"),

        new Producto()
            .setId(7)
            .setCodigo("SG001")
            .setNombre("Silla Gamer Secretlab Titan")
            .setDescripcion("Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.")
            .setCategoria("Sillas Gamers")
            .setPrecio(349990)
            .setImagen("/productos/sillaGamer.png")
            .setCantidad(10)
            .setMarca("Secretlab"),

        new Producto()
            .setId(8)
            .setCodigo("MS001")
            .setNombre("Mouse Gamer Logitech G502 HERO")
            .setDescripcion("Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.")
            .setCategoria("Mouse")
            .setPrecio(49990)
            .setImagen("/productos/mouseLogitech.png")
            .setCantidad(10)
            .setMarca("Logitech"),

        new Producto()
            .setId(9)
            .setCodigo("MP001")
            .setNombre("Mousepad Razer Goliathus Extended Chroma")
            .setDescripcion("Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.")
            .setCategoria("Mousepad")
            .setPrecio(29990)
            .setImagen("/productos/mousepad.png")
            .setCantidad(10)
            .setMarca("Razer"),

        new Producto()
            .setId(10)
            .setCodigo("RO001")
            .setNombre("Polera Gamer Personalizada 'Level-Up'")
            .setDescripcion("Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.")
            .setCategoria("Ropa")
            .setPrecio(19990)
            .setImagen("/productos/Polera-personalizada.png")
            .setDestacado(true)
            .setCantidad(10)
            .setMarca("Propia"),

        new Producto()
            .setId(11)
            .setCodigo("SD-01")
            .setNombre("Baraja Rokket")
            .setDescripcion("Baraja Rokket, es una estrategia pura constando de cartas genericas y de el propio arquetipo")
            .setCategoria("TCG")
            .setPrecio(99990)
            .setDestacado(true)
            .setImagen("/productos/cohette.jpg")
            .setListaImagen(["../../../public/productos/cohette-monster.jpg", "../../../public/productos/cohette-spell.jpg", "../../../public/productos/cohette-extra.jpg"])
            .setCantidad(1)
            .setMarca("Propia")
    ];
}