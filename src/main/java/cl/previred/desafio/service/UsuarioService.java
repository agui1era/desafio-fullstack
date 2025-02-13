package cl.previred.desafio.service;

import cl.previred.desafio.model.Usuario;
import java.util.List;

public interface UsuarioService {
    Usuario crearUsuario(Usuario usuario);
    List<Usuario> obtenerTodosLosUsuarios();
    Usuario obtenerUsuarioPorId(Long id);
    Usuario actualizarUsuario(Long id, Usuario usuario);
    void eliminarUsuario(Long id);
}
   