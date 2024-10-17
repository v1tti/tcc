package br.com.cwi.crescer.tcc.security.controller;

import br.com.cwi.crescer.tcc.security.controller.request.UsuarioRequest;
import br.com.cwi.crescer.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.crescer.tcc.security.service.BuscarUsuarioService;
import br.com.cwi.crescer.tcc.security.service.IncluirUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService service;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @PostMapping
    public UsuarioResponse incluir(@RequestBody UsuarioRequest request) {
        return service.incluir(request);
    }

    @GetMapping("/me")
    public UsuarioResponse buscarUsuarioAutenticado() {
        return buscarUsuarioService.buscar();
    }
}
