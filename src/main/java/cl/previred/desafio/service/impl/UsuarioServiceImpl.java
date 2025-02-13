package cl.previred.desafio.service.impl;

import cl.previred.desafio.exception.UsuarioNotFoundException;
import cl.previred.desafio.model.Usuario;
import cl.previred.desafio.repository.UsuarioRepository;
import cl.previred.desafio.service.UsuarioService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public List<Usuario> obtenerTodosLosUsuarios() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario obtenerUsuarioPorId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException("Usuario no encontrado con ID: " + id));
    }

    @Override
    public Usuario actualizarUsuario(Long id, Usuario usuario) {
        Usuario existente = obtenerUsuarioPorId(id);

        existente.setNombres(usuario.getNombres());
        existente.setApellidos(usuario.getApellidos());
        existente.setRut(usuario.getRut());
        existente.setDv(usuario.getDv());
        existente.setFechaNacimiento(usuario.getFechaNacimiento());
        existente.setCorreoElectronico(usuario.getCorreoElectronico());
        existente.setContrasena(usuario.getContrasena());

        return usuarioRepository.save(existente);
    }

    @Override
    public void eliminarUsuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException("Usuario no encontrado con ID: " + id));
        usuarioRepository.delete(usuario);
    }
}
