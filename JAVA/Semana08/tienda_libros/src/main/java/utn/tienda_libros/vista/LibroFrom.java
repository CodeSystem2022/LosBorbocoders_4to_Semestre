package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

@Component
public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
    }
    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //para obtener las dimenciones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamañoPantalla = toolkit.getScreenSize();
        int x = (tamañoPantalla.width - getWidth()/2);
        int y = (tamañoPantalla.height - getHeight()/2);
        setLocation(x, y);
    }

    private void createUIComponents() {
        this.tablaModeloLibros = new DefaultTableModel(0, 5);
        String[] cabecera = {"Id","Libro","Autor","Precio","Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        //instanciar el obj jtable
        this.tablaLibros = new JTable(tablaModeloLibros);
        listarLibros();
    }

    private void listarLibros(){
        //limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //obtener los libros de la bd
        var libros = libroServicio.listarLibros();
        //iteramos
        libros.forEach((libro) -> {
            //creamos cada registro para gregarlos a la tabla
            Object [] renglonLibro = {
                    libro.getIdLibro(),
                    libro.getNombreLibro(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias()
            };
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}
