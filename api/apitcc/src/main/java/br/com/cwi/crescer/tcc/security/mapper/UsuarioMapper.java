package br.com.cwi.crescer.tcc.security.mapper;

import br.com.cwi.crescer.tcc.security.controller.request.UsuarioRequest;
import br.com.cwi.crescer.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.crescer.tcc.security.domain.Usuario;

public class UsuarioMapper {

    public static Usuario toEntity(UsuarioRequest request) {
        Usuario entity = new Usuario();
        entity.setNome(request.getNome());
        entity.setEmail(request.getEmail());
        entity.setAltura(request.getAltura());
        entity.setPeso(request.getPeso());
        entity.setSexo(request.getSexo());
        entity.setDataNascimento(request.getDataNascimento());
        entity.setAtividadeFisica(request.getAtividadeFisica());
        return entity;
    }

    public static UsuarioResponse toResponse(Usuario entity) {
        UsuarioResponse response = new UsuarioResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setEmail(entity.getEmail());
        response.setPeso(entity.getPeso());
        response.setSexo(entity.getSexo());
        response.setDataNascimento(entity.getDataNascimento());
        response.setAtividadeFisica(entity.getAtividadeFisica());
        response.setAltura(entity.getAltura());
        return response;
    }
}
