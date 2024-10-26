const locators = {
    cadastro_titulo: '.signup-form > h2',
    login_titulo: '.login-form > h2',
    preencher_informacoes_titulo: '.title.text-center',
    usuario_logado: ':nth-child(10) > a',
    contato_titulo: 'div.contact-form > .title',
    carrinho_titulo: '.active',
    sucesso_contato_form: '.status',
    produtos_titulo: '.title',
    lista_produtos: '.features_items',
    produtos_encontrados_titulo: '.title',
    nome_produto: '.productinfo > p',
    label_subscription: '.single-widget > h2',
    add_carrinho: '.productinfo > .btn',
    label_senha_incorreta: '.login-form > form > p',
    label_email_existente: '.signup-form > form > p',
    label_confirma_compra: '.col-sm-9 > p',
    tela_produto: {
        produto_nome:'.product-information > h2',
        produto_categoria: '.product-information > :nth-child(3)',
        produto_preco: ':nth-child(5) > span',
        produto_disponibilidade: '.product-information > :nth-child(6)',
        produto_condicao: '.product-information > :nth-child(7)',
        produto_marca: '.product-information > :nth-child(8)'
    },
    menu: {
        pagina_contato: "a[href$=contact_us]",
        pagina_login: "a[href$=login]",
        pagina_logout: 'a[href="/logout"]',
        pagina_deletar_conta: 'a[href="/delete_account"]',
        pagina_produtos: 'a[href="/products"]',
        pagina_pagamento: 'a[href="/payment"]'
    }
}

export default locators;