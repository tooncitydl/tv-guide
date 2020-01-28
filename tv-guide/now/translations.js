/**
 * Translations for the main application module 'go'.
 */
/* eslint-disable max-len */
angular.module('go')
.constant('goCnstTranslations', {
  "version": "7.4.1",
  "title": "Vivo Play",
  "description": "InÃ­cio",
  "branding": {
    "brand": "Vivo",
    "copyright": "Â©",
    "telephone": "10615"
  },
  "errors": {
    "default": {
      "title": "ops!",
      "description": "Ocorreu um erro...</br>Tente novamente em alguns instantes",
      "actionButton": "Tentar novamente"
    },
    "subscriptions": {
      "description": "Estes conteÃºdos nÃ£o estÃ£o disponÃ­veis para sua assinatura."
    },
    "liveFromSocialMedia": {
      "title": "ops!",
      "description": "Desculpe, o conteÃºdo que vocÃª estÃ¡ procurando expirou. </br> NÃ£o se preocupe, temos outro conteÃºdo disponÃ­vel no momento.",
      "actionButton": "Ver programaÃ§Ã£o"
    }
  },
  "common": {
    "back": "Voltar",
    "continue": "Continuar",
    "date": {
      "today": "Hoje",
      "tomorrow": "AmanhÃ£",
      "separator": " - ",
      "unknown": "?",
      "day": "{count, plural, one{dia} other{dias}}",
      "hour": "{count, plural, one{hora} other{horas}}",
      "minute": "{count, plural, one{min} other{min}}"
    },
    "genre": {
      "name": "Categoria"
    },
    "error": {
      "duration": "N/D",
      "loading": "NÃ£o foi possÃ­vel carregar esta seÃ§Ã£o.",
      "channelList": "NÃ£o foi possÃ­vel carregar este canal.",
      "catalogItems": "NÃ£o foi possÃ­vel carregar este conteÃºdo.",
      "serviceWithoutAccess": "Este conteÃºdo estÃ¡ disponÃ­vel apenas no Vivo Play dentro de casa.",
      "title": "Ops!!"
    },
    "save": "Salvar",
    "yes": "Sim",
    "no": "NÃ£o",
    "accept": "Ok",
    "cancel": "Cancelar",
    "close": "Fechar",
    "configure": "Configurar",
    "send": "Enviar",
    "link": {
      "seeAll": "Ver todos",
      "seeMore": "Ver Mais",
      "seeLess": "Ver menos"
    },
    "notAvailable": "N/D",
    "notAvailableText": "InformaÃ§Ã£o nÃ£o disponÃ­vel",
    "joinSeparator": ",",
    "timeToPeriod": {
      "now": "'Agora'",
      "today": "'Hoje'",
      "tomorrow": "'AmanhÃ£'",
      "yesterday": "'Ontem'",
      "other": "EEEE, dd"
    },
    "emitted": {
      "today": "Exibido hoje",
      "yesterday": "Exibido ontem",
      "other": "Exibido em"
    },
    "emittedChannelLoggedIn": {
      "now": "Agora em",
      "today": "Hoje em",
      "tomorrow": "AmanhÃ£ em",
      "next7d": "em",
      "other": "de"
    },
    "emittedChannelAnonymous": {
      "now": "Agora em",
      "today": "Hoje em",
      "tomorrow": "AmanhÃ£ em",
      "next7d": "de",
      "other": "de"
    },
    "available": {
      "today": "DisponÃ­vel no catÃ¡logo {{day}}",
      "other": "DisponÃ­vel no catÃ¡logo atÃ© {{day}}"
    },
    "quality": {
      "HighDefinitionFull": "Full HD",
      "HighDefinition": "HD",
      "StandardDefinition": "SD",
      "LowDefinition": "LD",
      "Unknown": "N/A"
    },
    "pin": {
      "forgotten": "Esqueceu seu cÃ³digo?",
      "call": "Ligue para {{telephone}}"
    },
    "seasonName": "{{title}} - T. {{season}}",
    "episodeName": "{{title}} - T. {{season}} Ep. {{episode}}",
    "episodeNameShort": "Temporada",
    "episodeNameShortWithDash": "Temporada",
    "percentage": "{{value}}%",
    "filter": "Filtro",
    "myOffer": "Meus ConteÃºdos",
    "allOffer": "Todos",
    "userData": {
      "name": "Nome",
      "email": "E-mail",
      "birthDate": "Data de Nascimento",
      "gender": "Categoria",
      "creditCard": "CartÃ£o de crÃ©dito",
      "cardStatus": "Estado do cartÃ£o",
      "bankStatus": {
        "ExpiredCreditCard": "Expirado",
        "InvalidCreditCard": "InvÃ¡lido",
        "RejectedCreditCard": "Recusado"
      },
      "change": "Alterar",
      "genderValue": {
        "Male": "Masculino",
        "Female": "Feminino"
      }
    },
    "SIA": {
      "errors": {
        "expiredCard": "CartÃ£o expirado. Verifique o cartÃ£o e reiniciar a operaÃ§Ã£o.",
        "data": "Erro nos dados de entrada. Revise-s e reinicie a operaÃ§Ã£o",
        "captcha": "Caracteres digitados nÃ£o correspondem as mostradas na imagem. Por favor, tente novamente.",
        "expiredForm": "Tempo excedido. Reinicie a operaÃ§Ã£o",
        "processingData": "Erro no processamento dos dados. Para continuar, reinicie a operaÃ§Ã£o.",
        "bank": "Ocorreu um erro na transaÃ§Ã£o com seu banco.",
        "duplicatedCard": "PossÃ­vel duplicaÃ§Ã£o de cartÃ£o. Cheque os dados do cartÃ£o para reiniciar o processo.",
        "restrictedCard": "CartÃ£o restrito: nÃ£o Ã© possÃ­vel efetuar o pagamento. Verifique os dados do cartÃ£o e reinicie a operaÃ§Ã£o.",
        "cvv": "Insira o CVV para continuar",
        "notEnoughMoney": "Excedido o limite disponÃ­vel no cartÃ£o.",
        "name": "Nome inserido incorreto.",
        "anotherOperation": "Erro. Existe outra operaÃ§Ã£o em andamento. Por favor, tente novamente mais tarde.",
        "default": "Um problema ocorreu na transaÃ§Ã£o com o seu banco"
      },
      "retry": "Ocorreu um erro no serviÃ§o. Por favor, tente novamente em alguns minutos."
    }
  },
  "subscriptionBox": {
    "addSub": "Adicionar assinatura",
    "removeSub": "Detalhes assinatura",
    "cancelling": "Efetuado o cancelamento",
    "pending": "Pendente"
  },
  "auth": {
    "logIn": "Login",
    "logOut": "Sair",
    "password": "Senha do Meu Vivo",
    "remember": "Lembrar login",
    "signIn": "Login",
    "userName": "CPF Meu Vivo",
    "hello": "OlÃ¡ Cliente Vivo Play",
    "welcome": "Bem-Vindo!",
    "returnToHome": "Voltar para o inÃ­cio ",
    "recoverPasswordTitle": "Esqueceu sua senha?",
    "recoverPassword": {
      "link": "Esqueci a senha do Meu Vivo",
      "message": "Informe o e-mail cadastrado para receber uma nova senha:",
      "response": "Uma nova senha foi enviada em seu e-mail.",
      "successTitle": "Processo concluÃ­do",
      "success": "Uma nova senha foi enviada com sucesso para o e-mail cadastrado.",
      "error": {
        "title": "Ops!",
        "message": "NÃ£o foi possÃ­vel enviar uma nova senha."
      }
    },
    "rememberPassword": {
      "title": "Esqueceu a senha?",
      "description": "Enviaremos um link para o seu e-mail para que possa alterar.",
      "invalidEmail": "Por favor, inserir um e-mail vÃ¡lido."
    },
    "rememberPasswordSuccess": {
      "title": "Enviado",
      "descriptionPre": "Enviamos um e-mail",
      "descriptionPost": "com um link para que vocÃª possa alterar a sua senha",
      "tryAgain": "VocÃª nÃ£o recebeu? Por favor, verifique sua pasta de spam. Se nÃ£o estiver lÃ¡, vocÃª <a href='{{rememberLink}}'>envia novamente</a>"
    },
    "newPassword": {
      "title": "Altere sua Senha",
      "description": "Por favor, digite e confirme a nova senha",
      "new": "Nova senha",
      "repeat": "Digite novamente",
      "passwordFormat": "Lembrete de Senha",
      "passwordAdvice": "<p>Uma senha segura deve ter as seguintes caracterÃ­sticas:<p><ul><li>Um tamanho maior que 8 caracteres.</li><li>Conter letras minÃºsculas, um nÃºmero e um caractere especial (como ~!@#$%^&*()_+=?><.,/).</li><li>Nenhuma palavra ou data associada a vocÃª (como o nome de um animal de estimaÃ§Ã£o, sobrenomes ou data de nascimento).</li><li>Ser uma combinaÃ§Ã£o de palavras com uso incomum de maiÃºsculas, nÃºmeros e caracteres especiais intercalados. As palavras com erros ortogrÃ¡ficos sÃ£o mais seguras.</li><li>Seja algo que vocÃª possa lembrar.</li></ul>",
      "invalidPassword": "O formato da senha nÃ£o estÃ¡ correto",
      "passwordsDoNotMatch": "As senhas devem coincidir"
    },
    "newPasswordError": {
      "title": " ",
      "unexpectedError": "Ocorreu um erro. Por favor, tente novamente.",
      "sendingMailError": "Ocorreu um erro e nÃ£o foi possÃ­vel enviar o e-mail para ",
      "expirationMailError": "O link enviado expirou. NÃ£o se preocupe, enviaremos um novo  para ",
      "tryAgain": "Enviaremos um novo link"
    },
    "newPasswordSuccess": {
      "title": "Feito!",
      "description": "Sua nova senha esta pronta"
    },
    "tasa": {
      "pageTitle": "Iniciando...",
      "progress": "Identificando seu cadastro...",
      "error": {
        "title": "Erro de identificaÃ§Ã£o seu cadastro",
        "generic": "Aconteceu um erro ao identificar seu cadastro, vocÃª pode tentar novamente  novamente. Se o erro persistir, entre em contato com o telefone 106 15",
        "userNotActive": "Ocorreu um erro ao identificar o usuÃ¡rio. Seu usuÃ¡rio estÃ¡ desabilitado",
        "userTryingToRoamingSSO": "Ocorreu um erro. NÃ£o Ã© possÃ­vel acessar o serviÃ§o desta regiÃ£o",
        "logoutTitle": "Erro ao encerrar a sessÃ£o",
        "logoutGeneric": "Ocorreu um erro ao encerrar a sessÃ£o, por favor, tente novamente mais tarde. Se o erro persistir entre em contato com a Central de Relacionamento atravÃ©s do 106 15"
      },
      "tvServiceNotAvailable": {
        "title": "ServiÃ§o de TV nÃ£o disponÃ­vel",
        "message": "Para desfrutar do serviÃ§o Vivo Play, vocÃª deve completar o registo de serviÃ§o de TV do seu PC",
        "error": "Para desfrutar do serviÃ§o Vivo Play, vocÃª deve completar o registo de serviÃ§o de TV do seu PC. Entre em contato com o cliente de serviÃ§o",
        "acceptButton": "Assinar"
      }
    },
    "error": {
      "email": {
        "required": "Por favor, informe os dados do Meu Vivo.",
        "invalid": "UsuÃ¡rio ou senha invÃ¡lido. Use dados do Meu Vivo. Em caso de dÃºvidas, ligue para 10615"
      },
      "password": {
        "required": "A senha Ã© obrigatÃ³ria."
      },
      "logIn": "O e-mail e a senha nÃ£o correspondem, tente novamente.",
      "inactive": "Essa conta ainda nÃ£o estÃ¡ ativa. Cadastre-se e tente novamente.",
      "recoverPassword": "NÃ£o hÃ¡ nenhuma conta associada a este endereÃ§o de e-mail.",
      "trustedDevice": "Este dispositivo nÃ£o pÃ´de ser conectado"
    }
  },
  "catchup": {
    "open": "Abrir"
  },
  "catchupChannel": {
    "noChannels": "NÃ£o hÃ¡ nenhuma informaÃ§Ã£o associada",
    "channel": "Canal"
  },
  "config": {
    "link": "ConfiguraÃ§Ã´es"
  },
  "browser": {
    "version": "VersÃ£o {{version}}",
    "browserWarning": {
      "title": "Este navegador nÃ£o suporta o serviÃ§o.",
      "message": "Por favor, escolha um dos navegadores abaixo:",
      "continueAnyway": "{{continueLinkHTML}} de qualquer forma ",
      "continueLink": "Continuar navegando.",
      "continueAnywayExtra": "Gravar mesmo assim"
    }
  },
  "cookies": {
    "warning": {
      "policyUrl": "http:\\/\\/www.vivo.com.br\\/portalweb\\/appmanager\\/env\\/web?_nfls=false&_nfpb=true&_pageLabel=vivoVivoInstPrivacidadePage&cliente=1&cltype=c291Y2xpZW50ZQ&regional=SP#",
      "message": "Nosso site usa cookies para fornecer um melhor serviÃ§o.  Para mais informaÃ§Ãµes, consulte nossa   {{valueHTML}}.",
      "messageLink": "Nosso site usa cookies para fornecer um melhor serviÃ§o. Para mais informaÃ§Ãµes, consulte nossa PolÃ­tica de cookies. <a href='{{cookiesLink}}' target='_blank' title='{{cookiesText}}'> {{cookiesText}}</a>, vocÃª pode ver como a rejeitÃ¡-las.",
      "ok": "Ok",
      "policyCookiesText": "PolÃ­tica de cookies"
    }
  },
  "subscriptions": {
    "rent": "Assinar",
    "descriptionTitle": "DescriÃ§Ã£o da oferta",
    "seeMoreChannels": "Ver mais canais",
    "seeLessChannels": "Ver mais canais",
    "recommendationsTitle": "ConteÃºdos destacados da oferta",
    "recurrence": {
      "Daily": "dia",
      "Weekly": "semana",
      "Monthly": "MÃªs",
      "Quarter": "trimestre",
      "Half": "Seis meses",
      "Yearly": "anual",
      "Days2": "a cada 2 dias",
      "Days3": "a cada 3 dias",
      "Days4": "a cada 4 dias",
      "Days5": "a cada 5 dias",
      "Days6": "a cada 6 dias"
    }
  },
  "detail": {
    "error": {
      "title": "Oooops! Ocorreu um erro.",
      "retry": "Este conteÃºdo estÃ¡ disponÃ­vel apenas no Vivo Play dentro de casa."
    }
  },
  "editors": {
    "liveChannelError": "NÃ£o hÃ¡ informaÃ§Ãµes suficientes para exibir o canal"
  },
  "epg": {
    "channels": "Canais",
    "play": "Assistir",
    "playChannel": "Assistir",
    "notSubscribedChannelError": "Este conteÃºdo nÃ£o pertence ao seu pacote de TV. Para mais informaÃ§Ãµes, entre em contato com a Central de Atendimento 10615.",
    "upcomingProgramError": "NÃ£o hÃ¡ informaÃ§Ã£o disponÃ­vel na Guia de ProgramaÃ§Ã£o",
    "divider": "Canais disponÃ­veis na sua TV",
    "onNowLabel": "Guia Vivo TV",
    "showAllGuide": "Ver guia completa",
    "filteredBy": "Filtrar Por",
    "navbar": {
      "now": "Agora"
    },
    "details": {
      "notAvailable": "InformaÃ§Ã£o indisponÃ­vel",
      "channelNumber": "(Canal {{channelNumber}})"
    },
    "loading": "Carregando...",
    "error": {
      "title": "Oooops! Ocorreu um erro.",
      "retry": "Por favor, tente mais tarde..."
    },
    "pvr": {
      "conflict": {
        "title": "Conflito de gravaÃ§Ãµes",
        "message": "VocÃª programou muitas gravaÃ§Ãµes para o mesmo horÃ¡rio. Por favor, cancele uma delas e repita a operaÃ§Ã£o."
      },
      "recordingNotFoundError": "NÃ£o foi possÃ­vel cancelar a gravaÃ§Ã£o.",
      "error": "Oooops! Ocorreu um erro",
      "cancel": "Cancelar gravaÃ§Ã£o",
      "record": "Gravar",
      "recording-bar": "Gravando",
      "conflict-bar": "Conflito de gravaÃ§Ã£o",
      "processing": "Processando gravaÃ§Ã£o",
      "onAirWarning": "VocÃª jÃ¡ possui uma gravaÃ§Ã£o programada. Tente novamente em alguns instantes.",
      "errorUpdatingInformation": "NÃ£o foi possÃ­vel receber informaÃ§Ãµes sobre a aÃ§Ã£o. Tente novamente mais tarde",
      "popover": {
        "episode": "Somente este episÃ³dio",
        "season": "Toda temporada"
      },
      "firstTimeWarningMessage": "VocÃª poderÃ¡ assistir as gravaÃ§Ãµes em sua televisÃ£o.",
      "firstTimeWarningCheckBox": "NÃ£o lembrar mais.",
      "firstTimeBlockedRecording": "O conteÃºdo foi bloqueado para a exclusÃ£o automÃ¡tica"
    },
    "epg": {
      "nowLink": "Agora"
    },
    "genresList": {
      "films": "Filmes",
      "series": "SÃ©ries",
      "sports": "Esportes",
      "tvshows": "Programas de TV",
      "others": "Outros",
      "kids": "Infantil"
    }
  },
  "error": {
    "message": "VocÃª pode <a href='' title='Voltar para a pÃ¡gina anterior' data-ng-click='__back__'> retornar Ã  pÃ¡gina anterior</a> ou <a href='#' title='Ir a la home'> voltar ao inÃ­cio.</a>",
    "statusCode": {
      "36": "UsuÃ¡rio invÃ¡lido",
      "54": "O cÃ³digo de confirmaÃ§Ã£o estÃ¡ incorreto.",
      "114": "Este usuÃ¡rio jÃ¡ foi ativado.",
      "404": "PÃ¡gina nÃ£o encontrada.",
      "503": "NÃ£o foi possÃ­vel carregar a pÃ¡gina. Verifique sua conexÃ£o.",
      "login-user-hash-code-error": "Ocorreu um erro no processo de autenticaÃ§Ã£o. Por favor, faÃ§a o login com seu usuÃ¡rio e senha.",
      "activation-error": "Ocorreu um erro durante o processo de ativaÃ§Ã£o.",
      "other": "@:error.statusCode.404",
      "default": "Ocorreu um erro inesperado. Tente novamente mais tarde"
    },
    "coverList": {
      "section": "NÃ£o foi possÃ­vel carregar esta seÃ§Ã£o."
    }
  },
  "footer": {
    "brand": ""
  },
  "header": {
    "menu": "Menu",
    "myAccount": "Minha Conta"
  },
  "library": {
    "availableCustom": "{{number}} {{period}}",
    "available": {
      "Unknown": "Indeterminado",
      "Daily": "24h",
      "Weekly": "1 semana",
      "Monthly": "1 MÃªs",
      "Quarter": "3 meses",
      "Half": "6 meses",
      "Yearly": "1 ano",
      "Days2": "48h",
      "Days3": "3 dias",
      "Days4": "4 dias",
      "Days5": "5 dias",
      "Days6": "6 dias"
    },
    "orderBy": "Ordenar por:",
    "orders": {
      "featured": "Destaques",
      "alphabetic": "TÃ­tulos A-Z",
      "releaseYear": "LanÃ§amentos",
      "publicationDate": "Novidade no catÃ¡logo",
      "new": "Recentes",
      "popularity": "VisualizaÃ§Ãµes",
      "editorialRating": "Recomendado pelo Vivo Play",
      "mostRated": "Melhores Avaliados",
      "duration": "DuraÃ§Ã£o",
      "licenseAvailabilityEnd": "Reprise",
      "personal": "Pessoal",
      "titleDesc": "TÃ­tulos Z-A",
      "episodeOrder": "Ordem de episÃ³dio",
      "seasonOrder": "Ordem de temporada",
      "relevance": "Relevantes"
    },
    "types": {
      "vod": "Busca em CatÃ¡logo",
      "live": "TV ao vivo",
      "l7d": "Reprise",
      "all": "Todos"
    },
    "purchaseDropdown": {
      "button": "Alugar {{quality}} {{price}}",
      "option": "{{quality}} {{price}} DisponÃ­vel {{expiration}} "
    },
    "expiresIn": "Expira em {{time}} {{period}}",
    "expiresAt": "Expira a {{date}}",
    "isFree": "GrÃ¡tis",
    "rent": "Alugar {{quality}} <b>{{price}}</b>",
    "rentEpisode": "Alugar EpisÃ³dio de {{price}}",
    "rentSeason": "Alugar Temporada de {{price}}",
    "rentAnonymous": "Alugar",
    "rentHover": "<b>{{price}}</b>-Aproveite <b>{{expiration}}</b>",
    "rentDropdown": "{{quality}} <b>{{price}}</b> {{expiration}} disponÃ­vel",
    "pending": "Aluguel pendente"
  },
  "popup": {
    "pin": {
      "name": "Controle de Pais",
      "wrong": "O cÃ³digo inserido estÃ¡ incorreto.",
      "example": "(ex: 1234)",
      "toPlay": "Por favor, insira seu cÃ³digo de controle de pais."
    },
    "purchase": {
      "toRent": "Insira sua Senha de Compra",
      "toRecharge": "Insira sua Senha de Compra",
      "success": {
        "title": "Aluguel realizado",
        "description": "'VocÃª pode assistir este conteÃºdo atÃ©' dd/MM/yy 'Ã s' HH:mm",
        "rechargeDescription": "A recarga foi feita com sucesso."
      },
      "error": {
        "title": "Ops, ocorreu um erro, por favor, tente novamente.",
        "message": "Ocorreu um erro ao tentar alugar o conteÃºdo. Por favor, tente novamente."
      },
      "errorCreditLimit": {
        "title": "Ops!",
        "message": "Desculpe, mas para seguranÃ§a razÃµes que estabelecemos um limite mÃ¡ximo de conteÃºdo que vocÃª pode alugar em cada perÃ­odo para evitar fraudes. Este prazo serÃ¡ redefinir todos os meses. <br/> <br/> Para mais informaÃ§Ãµes contacte o serviÃ§o ao cliente"
      },
      "errorSIA": {
        "title": "Ops!!",
        "message": "Ocorreu um erro ao fazer a compra, vocÃª pode ir para o aplicativo da web em suas configuraÃ§Ãµes de opÃ§Ã£o de navegador &gt; informaÃ§Ãµes do usuÃ¡rio para exibir o status do seu cartÃ£o ou tentar novamente em alguns minutos"
      },
      "selectPaymentMethod": "Selecione um mÃ©todo de pagamento."
    },
    "firstUse": {
      "purchase": {
        "title": "Senha de Compra",
        "description": "Sua senha de compra nÃ£o esta configurada. Deseja configurÃ¡-la agora?",
        "without": "Comprar sem cÃ³digo"
      },
      "login": {
        "title": "Controle de Pais",
        "description": "O Vivo Play possui conteÃºdos especÃ­ficos para cada faixa etÃ¡ria. Se desejar restringir, configure seu cÃ³digo de controle de pais em ConfiguraÃ§Ãµes.\n"
      }
    },
    "catchup": {
      "error": {
        "title": "Ocorreu um erro",
        "description": "NÃ£o foi possÃ­vel acessar o conteÃºdo. Por favor, tente novamente mais tarde."
      },
      "loading": {
        "description": "VocÃª estÃ¡ saindo do ambiente Vivo Play, aguarde..."
      },
      "amazon": {
        "description": "Sua assinatura do Prime Video nÃ£o estÃ¡ ativa. Clique no botÃ£o a seguir para ativa-la",
        "button": "Ativar assinatura",
        "loading": "Estamos redirecionando vocÃª para o Prime Video..."
      }
    },
    "goToAmazon": {
      "title": "Oooops! Ocorreu um erro",
      "description": "NÃ£o foi possÃ­vel ir para o Amazon Prime Video. Por favor, tente novamente mais tarde."
    },
    "follow": {
      "error": {
        "title": "Ops!!",
        "message": "ocorreu um erro ao seguir Ã  sÃ©rie."
      }
    },
    "adults": {
      "title": "Acesso para maiores de 18 anos.",
      "withoutAccess": "VocÃª nÃ£o pode acessar a Ã¡rea de adultos sem configurar seu cÃ³digo de controle de pais.",
      "mandatoryPin": "Para acessar esta seÃ§Ã£o Ã© necessÃ¡rio configurar seu cÃ³digo de controle de pais.",
      "infoPin": "Por favor, digite seu cÃ³digo de controle de pais para acessar os conteÃºdos."
    },
    "availabilityRestriction": {
      "title": "Ops!!",
      "message": "Este conteÃºdo nÃ£o pode ser assistido neste dispositivo"
    }
  },
  "newPlayer": {
    "audio": "Ãudios",
    "subtitle": "Legendas",
    "quality": "Qualidade",
    "disabled": "Desativado",
    "languages": {
      "eng": "InglÃªs",
      "spa": "Espanhol",
      "en": "InglÃªs",
      "sp": "Espanhol",
      "por": "PortuguÃªs",
      "pt": "PortuguÃªs"
    },
    "bingeWatching": {
      "nextEpisode": "PrÃ³ximo episÃ³dio",
      "nextEpisodeCountdown": "..."
    }
  },
  "player": {
    "error": {
      "title": "Ocorreu um erro",
      "channelNonSubscribedTitle": "ConteÃºdo indisponÃ­vel",
      "channelNonSubscribed": "VocÃª nÃ£o possui este conteÃºdo em sua assinatura",
      "channelNotAvailable": "O canal selecionado nÃ£o estÃ¡ disponÃ­vel no momento.",
      "general": "Este conteÃºdo nÃ£o estÃ¡ disponÃ­vel no momento.",
      "comingSoon": "Este conteÃºdo estarÃ¡ disponÃ­vel em breve.",
      "widevineChrome": "Widevine componente estÃ¡ desativado e deve ser habilitado para reproduzir este conteÃºdo. Por favor, vÃ¡ para a URL chrome://components, habilitÃ¡-lo e atualize esta pÃ¡gina para tentar novamente.",
      "widevineFirefox": "Componente de Widevine estÃ¡ desabilitado. Siga <a target=\"_blank\" href=\"https://support.mozilla.org/en-US/kb/enable-drm\"> estas etapas</a> para habilitÃ¡-lo, atualize esta pÃ¡gina e tente novamente.",
      "httpWarning": "ExtensÃµes de mÃ­dia criptografada (EME) nÃ£o sÃ£o suportados no protocolo http. Ã‰ possÃ­vel que a reproduÃ§Ã£o nÃ£o funcione sob essas condiÃ§Ãµes.",
      "httpWarningTitle": "AtenÃ§Ã£o"
    },
    "play": "Assistir",
    "errorDialogTitle": "Erro",
    "concurrencyControlTitle": "Controle de simultaneidade",
    "concurrencyControlBody": "As reproduÃ§Ãµes simultÃ¢neas alcanÃ§aram o limite disponÃ­vel.",
    "parentalControlTitle": "Controle de Pais",
    "parentalControlBody": "Por favor, insira seu cÃ³digo de controle de pais.",
    "toolbarLanguages": "Idioma",
    "toolbarAudio": "Ãudio",
    "toolbarQuality": "Qualidade",
    "toolbarSubtitles": "Legendas",
    "toolbarScreen": "Tela",
    "toolbarQualityFullHD": "Full HD",
    "toolbarQualityHD": "HD",
    "toolbarQualitySD": "SD",
    "toolbarQualitySubSD": "LD",
    "toolbarAspectFull": "Tela cheia",
    "toolbarAspectNormal": "Normal",
    "toolbarAspectWideZoom": "Wide Zoom",
    "toolbarAspectZoom": "ZOOM",
    "toolbarRecordButton": "Gravar",
    "toolbarEpgUnavailable": "Programa sem informaÃ§Ã£o",
    "dialogOkButton": "OK",
    "dialogYesButton": "Sim",
    "dialogNoButton": "NÃ£o",
    "dialogCancelButton": "Cancelar",
    "errorLostConnectionTitle": "ConexÃ£o perdida!",
    "errorLostConnectionSubtitle": "Tente novamente mais tarde...",
    "analyzeManifestError": "Erro ao reproduzir.",
    "resumeMultiscreenPlayFromBeginning": "RecomeÃ§ar",
    "resumeMultiscreenResumePlayback": "Continuar",
    "playbackWarning": {
      "title": "Este conteÃºdo estarÃ¡ disponÃ­vel em breve no seu Vivo Play.",
      "message": "Este navegador nÃ£o suporta o <i>Silverlight</i>. Por favor, escolha um dos navegadores abaixo para continuar:",
      "isOptimized": "Habilite manualmente o Silverlight para reproduzir conteÃºdos neste navegador. VocÃª pode obter mais informaÃ§Ãµes no link abaixo. Recomendamos que utilize outros navegadores.",
      "moreInformation": "Mais informaÃ§Ãµes aqui.",
      "remember": "NÃ£o mostrar novamente",
      "downloadMessage": "Baixe gratuitamente:"
    },
    "operations": {
      "title": "Player de teste para operaÃ§Ãµes",
      "playing": "Reproduzindo..."
    },
    "fabrix": {
      "firefoxMac": {
        "title": "InformaÃ§Ãµes Reprise",
        "message": "O conteÃºdo Reprise nÃ£o Ã© suportado no Firefox no Mac OS X. Recomendamos o Google Chrome para reproduzi-los."
      }
    }
  },
  "details": {
    "playEpisode": "Assistir T{{season}} E{{episode}}",
    "playTrailer": "Assistir trailer",
    "playSeriesTrailer": "Veja o Trailer T{{seasonNumber}}",
    "purchaseDropdown": {
      "title": "Alugar de {{price}}",
      "quality": "{{quality}} {{price}} IVA Incl. ({{expiration}})"
    },
    "purchase": "{{quality}} {{price}} ({{expiration}})",
    "purchaseAnonymous": "Alugar",
    "subscribe": "Assinar {{name}}",
    "subscribeDropdown": "Assinar",
    "playExternal": "Reproduzir em",
    "related": "Relacionados",
    "subscriptionRelated": "ConteÃºdo em destaque",
    "channelsIncluded": "{{length}} CANAIS INCLUÃDOS",
    "upselling": "Upselling",
    "notificationBar": {
      "playbackError": "Este conteÃºdo nÃ£o estÃ¡ disponÃ­vel para reproduÃ§Ã£o",
      "purchaseError": "Este conteÃºdo nÃ£o estÃ¡ disponÃ­vel para comprar",
      "blockTvodError": "Este conteÃºdo nÃ£o esta disponÃ­vel no seu pacote",
      "subscribeOnly": "Este conteÃºdo requer assinatura de um pacote de TV.",
      "subscribeError": "Ligue para 106 15 para ter este e muitos outros conteÃºdos",
      "subscritionError": "Ligue para 106 15 para ter este e muitos outros conteÃºdos"
    },
    "availableMessage": {
      "expired": "Este conteÃºdo nÃ£o estÃ¡ disponÃ­vel",
      "lessThan1Hour": "DisponÃ­vel no catÃ¡logo por menos de 1 hora",
      "lessThan48Hours": "DisponÃ­vel no catÃ¡logo durante {{hours}} horas",
      "moreThan48Hours": "DisponÃ­vel no catÃ¡logo atÃ© {{date}}"
    },
    "expirationMessage": {
      "expired": "IndisponÃ­vel",
      "lessThan1Hour": "VocÃª possui menos de 1 hora para assistir este conteÃºdo",
      "lessThan48Hours": "VocÃª tem {{hours}} horas para assistir este conteÃºdo",
      "moreThan48Hours": "DisponÃ­vel atÃ© {{date}}"
    },
    "amazonAlreadyUser": "JÃ¡ tenho uma conta Prime Video"
  },
  "recommendations": {
    "list": {
      "header": "VocÃª poderia estar interessado..."
    }
  },
  "carousel": {
    "link": "Ver todos",
    "error": {
      "title": "NÃ£o foi possÃ­vel carregar esta Ã¡rea",
      "subtitle": "Atualize a pÃ¡gina"
    }
  },
  "home": {
    "error": {
      "title": "Ocorreu um erro ao carregar o conteÃºdo. Por favor, tente novamente.",
      "subtitle": "Atualize a pÃ¡gina e tente novamente.",
      "service": "Ocorreu um erro no serviÃ§o. Por favor, tente novamente em alguns minutos."
    },
    "popupError": "Mais informaÃ§Ãµes sobre <a href='http://www.movistar.es' title='Movistar TV'> Vivo Play</a> ou chamando o seu centro de serviÃ§o ao cliente",
    "channel": {
      "goTo": "Ir para {{title}}",
      "seeAll": "Ver todos"
    },
    "liveArea": {
      "title": "TV ao vivo",
      "subtitle": "Ir para Guia Vivo TV"
    },
    "promos": {
      "title": "VocÃª quer melhorar seu Vivo Play?"
    }
  },
  "product": {
    "cast": "Elenco",
    "director": "Diretor",
    "episode": "{count, plural, one{EpisÃ³dio} other{EpisÃ³dios}}",
    "episodeParenthesis": "{count, plural, one{EpisÃ³dio} other{EpisÃ³dios}}",
    "language": "Idioma",
    "quality": {
      "hd": "HD",
      "sd": "SD"
    },
    "rating": "ClassificaÃ§Ã£o",
    "season": "Temporada",
    "seasonAbbreviation": "Temp.",
    "seasonNumber": "{count, plural, one{# Temporada} other{# Temporadas}}",
    "subtitles": "Legendas",
    "purchase": {
      "availableSoon": "O conteÃºdo estarÃ¡ disponÃ­vel para aluguel em breve.",
      "notAvailable": "Este conteÃºdo nÃ£o pertence ao seu pacote de TV ou nÃ£o tem permissÃ£o para ser reproduzido neste dispositivo.",
      "externalCatchUp": "Este conteÃºdo nÃ£o pertence ao seu pacote de TV. Para mais informaÃ§Ãµes, entre em contato com a Central de Atendimento 10615."
    },
    "playOptions": "Ver no Portal da programadora.",
    "watchList": {
      "title": "Adicionar Ã  Minha Lista",
      "added": "Adicionar Ã  Minha Lista",
      "error": {
        "title": "Ops! Ocorreu um erro.",
        "text": "NÃ£o foi possÃ­vel adicionar ou remover este item da lista. Por favor, tente novamente."
      }
    },
    "follow": {
      "title": "Seguir",
      "added": "Parar de seguir"
    }
  },
  "search": {
    "placeholder": "Busca",
    "resultTitle": "Resultados por",
    "result": "resultado de {{number}}",
    "error": {
      "noResults": "NÃ£o encontramos na busca.",
      "titleSearch": "Nenhum resultado para \"{{query}}\"."
    },
    "searchTotal": "Todos",
    "searchIn": "Buscar no Vivo Play",
    "strictSearch": "Resultados para \"{{query}}\".",
    "fuzzySearch": "Busca nÃ£o encontrada para \"{{query}}\". Os resultados mostrados sÃ£o para palavras semelhantes.",
    "ghostSearch": "Busca nÃ£o encontrada para \"{{query}}\". Os resultados mostrados sÃ£o para palavras semelhantes.",
    "remove": "Apagar"
  },
  "settings": {
    "settings": "ConfiguraÃ§Ãµes",
    "manageDevices": "Gerenciar Aparelhos",
    "parentalControl": "Controle de Pais",
    "mySubscriptions": "Assinaturas",
    "purchasePin": "Senha de Compra",
    "changePassword": "Altere sua Senha",
    "userInfo": "InformaÃ§Ãµes do usuÃ¡rio",
    "manageNotifications": "NotificaÃ§Ãµes",
    "managePlayback": "ReproduÃ§Ã£o",
    "l7d": "GravaÃ§Ãµes",
    "addDevice": {
      "title": "Adicionar Aparelho",
      "description": "Adicione sua TV Ã  lista de dispositivos. Desta forma, vocÃª pode usÃ¡-los juntos para desfrutar de conteÃºdo adicional e outros benefÃ­cios",
      "howTo": "Insira o cÃ³digo que aparece em sua televisÃ£o. <br/> Por favor, considere letras maiÃºsculas e minÃºsculas.",
      "device": {
        "code": "CÃ³digo:",
        "name": "Escolha o nome:",
        "nameLength": "caracteres)"
      },
      "add": "Adicionar",
      "addDeviceSuccess": "Aparelho adicionado com sucesso.",
      "addDeviceError": "Ocorreu um erro. Por favor, confira se o cÃ³digo de ativaÃ§Ã£o digitado Ã© o mesmo que aparece em sua televisÃ£o.",
      "codeFormatError": "Apenas caracteres alfanumÃ©ricos",
      "lengthFormatError": "O cÃ³digo deve conter {{length}} caracteres"
    },
    "devices": {
      "yours": "Aparelhos ativos",
      "description": "VocÃª pode ativar atÃ© 5 aparelhos em sua conta Vivo Play. Se vocÃª atingir o limite de aparelhos ativos, basta desativar abaixo aqueles que nÃ£o utiliza mais.",
      "devices": "Aparelhos",
      "activation": "Data de ativaÃ§Ã£o",
      "error": {
        "title": "Erro",
        "description": "Ocorreu um erro ao tentar remover o aparelho. Por favor, tente novamente."
      },
      "currentDevice": {
        "title": "Ops!!",
        "description": "O dispositivo nÃ£o pode ser excluÃ­do, pois Ã© a dispositivo atual. \nPara excluir vocÃª deve fazer isso de outro dispositivo."
      }
    },
    "notifications": {
      "info": {
        "title": "NotificaÃ§Ãµes",
        "introduction": "Agora vocÃª poderÃ¡ receber notificaÃ§Ãµes com novidades do Vivo Play em seu aparelho.",
        "descriptionFirst": "As notificaÃ§Ãµes serÃ£o feitas atravÃ©s de push em seu smartphone e tablet.",
        "descriptionSecond": "VocÃª pode desativÃ¡-las a qualquer momento diretamente em seu aparelho.",
        "question": "Ainda nÃ£o baixou o aplicativo?"
      },
      "edit": {
        "title": "Selecione suas Ã¡reas de interesses",
        "error": {
          "title": "Ocorreu um erro",
          "message": "Desculpe, nÃ£o foi possÃ­vel salvar suas alteraÃ§Ãµes.<br>Tente novamente mais tarde."
        },
        "success": "Seus interesses foram atualizados.",
        "cantLoad": "NÃ£o foi possÃ­vel carregar as informaÃ§Ãµes.",
        "tryLater": "Tente novamente mais tarde."
      }
    },
    "parental": {
      "control": "Controle de Pais",
      "editPin": "Alterar a Senha de Controle dos Pais",
      "description": "O Vivo Play possui conteÃºdos especÃ­ficos para cada faixa etÃ¡ria. Se desejar restringi-las, ative seu cÃ³digo de controle de pais.",
      "activate": "Ative Controle de Pais",
      "modifyAge": "Alterar Bloqueio de Pais por Idade",
      "pin": "Controle de pais:",
      "retypeIt": "Confirme a nova senha",
      "currentPin": "Senha atual",
      "newPin": "Nova senha",
      "pinExample": "(ex: 1234)",
      "notEqual": "Os cÃ³digos digitados nÃ£o sÃ£o iguais.",
      "changeAgeSuccess": "Faixa etÃ¡ria alterada com sucesso!",
      "changeAgeError": "Ocorreu um erro ao alterar sua faixa etÃ¡ria. Por favor, tente novamente.",
      "changePinSuccess": "CÃ³digo alterado com sucesso!",
      "changePinError": "Erro ao alterar o cÃ³digo.",
      "justNumbers": "Seu cÃ³digo deve conter 4 caracteres numÃ©ricos.",
      "lengthIncorrect": "O cÃ³digo requer 4 dÃ­gitos",
      "deactivate": {
        "pin": "Desativar Controle de Pais",
        "pleaseInsertPin": "Para desativar, por favor, insira seu cÃ³digo.",
        "deactivate": "Desativar",
        "success": "A senha para Controle de Pais foi desativada"
      }
    },
    "password": {
      "change": "Altere sua Senha",
      "current": "Senha atual",
      "new": "Nova senha",
      "retype": "Confirme sua nova senha",
      "notEqual": "As senhas digitadas nÃ£o sÃ£o iguais.",
      "invalidPass": "Senha invÃ¡lida",
      "regexError": "A senha deve possuir no mÃ­nimo 6 caracteres e nÃ£o pode conter espaÃ§os.",
      "changeSuccess": "Senha alterada com sucesso!",
      "changeError": "Ocorreu um erro ao alterar a senha.",
      "oldPassError": "A senha atual nÃ£o esta correta.",
      "description": "Sua senha de acesso ao Vivo Play Ã© a mesma do Meu Vivo. Para alterÃ¡-la acesse o portal do Meu Vivo em meuvivo.vivo.com.br/meuvivo ou atravÃ©s do App Meu Vivo Fixo em vivo.com.br/appfixo."
    },
    "account": {
      "data": "ConfiguraÃ§Ãµes da Conta",
      "cardStatusError": "VocÃª nÃ£o concluiu seu processo de registro. Para terminÃ¡-lo e desfrutar do serviÃ§o completo clique no link a seguir",
      "continueRegistration": "Continuar o registo"
    },
    "purchase": {
      "currentPin": "Senha de Compra atual",
      "description": "Para evitar compras indesejadas, configure uma senha de compra. Esta senha serÃ¡ solicitada em todo aluguel.",
      "modifyPurchasePin": "Alterar a Senha de Compra",
      "createPurchasePin": "Criar a sua Senha de Compra",
      "newPin": "Nova senha",
      "pin": "Senha de compra:",
      "retypeIt": "Confirme a nova senha",
      "changePinSuccess": "CÃ³digo alterado com sucesso!",
      "changePinError": "Ocorreu um erro ao alterar a senha de compra",
      "oldPassError": "A senha atual nÃ£o esta correta.",
      "justNumbers": "Somente nÃºmeros.",
      "lengthIncorrect": "Seu cÃ³digo deve conter 4 caracteres numÃ©ricos.",
      "notEqual": "Os cÃ³digos inseridos nÃ£o sÃ£o iguais.",
      "pinExample": "(Ex: 1234)"
    },
    "subscriptions": {
      "upgradeYourService": "ConteÃºdos Opcionais",
      "mySubscriptions": "ServiÃ§os Contratados",
      "error": "NÃ£o foi possÃ­vel carregar esta seÃ§Ã£o.",
      "loading": "Confirmando a compra, aguarde alguns segundos...",
      "loadingCancel": "Confirmando a compra, aguarde alguns segundos...",
      "onlineChannelPurchase": "Ligue 106 15 para contratar este serviÃ§o.",
      "onlineChannelCancellation": "Ligue 106 15 para cancelar este serviÃ§o.",
      "cancellationDisabled": "Assinatura nÃ£o pode ser cancelada a partir deste dispositivo. Ligue 106 15 para cancelÃ¡-lo.",
      "cancellingUntil": "A assinatura foi cancelada. Ainda estarÃ¡ disponÃ­vel atÃ© o {{date}}",
      "cancellingAmazon": "Assinatura ainda disponÃ­vel. Para mais informaÃ§Ã£o, verifique a sua conta do Amazon Prime Video.",
      "cancellationInProgressWithDate": "Cancelando. DisponÃ­vel atÃ© {{date}}",
      "noSubscriptionsPurchased": "NÃ£o hÃ¡ nenhuma assinatura contratada",
      "noSubscriptionsAvailable": "NÃ£o hÃ¡ nenhuma assinatura contratada",
      "errorPurchase": "Ocorreu um erro ao fazer a compra, tente novamente em alguns minutos ou ligue 106 15.",
      "errorPurchasing": "Ocorreu um erro ao fazer a compra, vocÃª pode ir para o aplicativo da web em suas configuraÃ§Ãµes de opÃ§Ã£o de navegador &gt; informaÃ§Ãµes do usuÃ¡rio para exibir o status do seu cartÃ£o ou tentar novamente em alguns minutos",
      "errorCanceling": "Ocorreu um erro ao fazer o cancelamento, retorna para tentar novamente em alguns minutos",
      "purchasingPin": {
        "title": "Insira sua Senha de Compra",
        "button": "Alugue por {{price}}"
      },
      "successfulPurchasePopup": {
        "title": "ParabÃ©ns!",
        "message": "Compra realizada. <br/>\nAgora vocÃª pode desfrutar o conteÃºdo."
      },
      "cancelationPin": {
        "title": "Inserir senha de compra",
        "button": "Cancelar a sua subscriÃ§Ã£o"
      },
      "successfulCancelPopup": {
        "title": "ConcluÃ­do",
        "message": "A operaÃ§Ã£o foi realizada com sucesso."
      },
      "onlineChannel": {
        "title": "Atendimento",
        "text": "Consulte ou modifique sua assinatura Vivo TV  atravÃ©s do telefone 106 15.",
        "button": "Canal on-line Vivo TV",
        "alternativeText": "Entre em contato com a Vivo TV atravÃ©s do telefone 106 15."
      },
      "amazonPurchaseInfo": {
        "text": "Assinatura disponÃ­vel para usuÃ¡rios que nÃ£o possuem Amazon Prime Video. Se vocÃª jÃ¡ possui o serviÃ§o contratado e queira aproveitar esta oferta, cancele sua assinatura atual no site da Amazon e aguarde o serviÃ§o expirar, em seguida contrate atravÃ©s do Vivo Play.",
        "accept": "Continuar comprando",
        "cancel": "Cancelar"
      }
    },
    "playback": {
      "autoplay": {
        "title": "ReproduÃ§Ã£o automÃ¡tica",
        "text": "ReproduÃ§Ã£o do prÃ³ximo episÃ³dio"
      }
    }
  },
  "audiosAndSubtitles": {
    "title": "ConfiguraÃ§Ãµes de Ã¡udio e legendas",
    "description": "As opÃ§Ãµes de Ã¡udio e legenda serÃ£o aplicadas por padrÃ£o cada vez que vocÃª reproduzir um conteÃºdo no seu Vivo Play, em todas as sÃ©ries, filmes ou canais de televisÃ£o que o permitirem.",
    "activateAll": "Aplicar em todos os dispositivos",
    "titleAudio": "Idioma de Ãudio",
    "subtitle": "Legendas",
    "audio": "Ãudios",
    "quality": "Qualidade",
    "titleCC": "Legendas Close Caption (CC)",
    "descrioptionCC": "Legendas com importantes informaÃ§Ãµes auditivas.",
    "activateCC": "Ativar legendas de Closed Caption (CC)",
    "error": "Sua preferÃªncia nÃ£o pÃ´de ser atualizada. <br> Por favor, tente novamente mais tarde.",
	"bingeWatching": {
    "nextEpisode": "PrÃ³ximo episÃ³dio",
    "nextEpisodeCountdown": "..."
    },
    "languages": {
      "automatic": "AutomÃ¡tico",
      "eng": "InglÃªs",
      "spa": "Espanhol",
      "por": "PortuguÃªs",
      "fra": "FrancÃªs",
      "zxx": "Desativado",
      "qaa": "Original",
      "deu": "AlemÃ£o",
      "ita": "Italiano",
      "zho": "ChinÃªs",
      "jpn": "JaponÃªs",
      "hin": "Hindi",
      "ara": "Ãrabe",
      "rus": "Russo",
      "und": "Desconhecido"
    }
  },
  "smartBanners": {
    "title": "Vivo Play",
    "subtitle": "TelefÃ´nica - Vivo",
    "playerInfo": "Baixe nosso aplicativo em seu celular e aproveite.",
    "view": "Baixar",
    "viewInfo": "Baixar o App em {{name}}",
    "android": {
      "price": "GrÃ¡tis na Google Play Store."
    },
    "error": {
      "noLink": "O aplicativo nÃ£o estÃ¡ disponÃ­vel para o seu celular."
    }
  },
  "myTv": {
    "sections": {
      "watched": "Recentes",
      "watchlist": "Minha Lista",
      "follow": "Seguindo",
      "recordingsProgrammed": "GravaÃ§Ãµes Programadas",
      "recordingsAvailable": "GravaÃ§Ãµes Realizadas",
      "rented": "Meus AluguÃ©is"
    },
    "myContents": "Meu Vivo Play",
    "empty": {
      "emptyRecordingsAvailableUpperText": "Gerencie suas gravaÃ§Ãµes",
      "emptyRecordingsAvailableLowerText": "Aqui vocÃª controla as gravaÃ§Ãµes realizadas em sua Vivo TV",
      "emptyRecordingsProgrammedUpperText": "Gerencie suas gravaÃ§Ãµes",
      "emptyRecordingsProgrammedLowerText": "Aqui vocÃª controla as gravaÃ§Ãµes programadas em sua Vivo TV",
      "emptyWatchlistUpperText": "Gerencie sua lista de conteÃºdos",
      "emptyWatchlistLowerText": "Aqui vocÃª encontra seus conteÃºdos para assistir quando quiser. Basta selecionar \"Minha lista\" no conteÃºdo desejado.",
      "emptyRentedUpperText": "Gerencie seus conteÃºdos alugados",
      "emptyRentedLowerText": "VocÃª nÃ£o possui nenhum conteÃºdo alugado",
      "emptyFollowUpperText": "Siga suas sÃ©ries favoritas",
      "emptyFollowLowerText": "Aqui vocÃª gerencia todos os episÃ³dios das sÃ©ries que acompanha.",
      "emptyWatchedUpperText": "Ainda nÃ£o assistiu nenhum conteÃºdo?",
      "emptyWatchedLowerText": "Aqui vocÃª gerencia seus conteÃºdos assistidos.",
      "emptyRPVROnlyConfigUpperText": "Recurso nÃ£o disponÃ­vel",
      "emptyRPVROnlyConfigLowerText": "Para maiores informaÃ§Ãµes entre em contato com a Central de Atendimento"
    },
    "error": {
      "errorUpperText": "Ops, nÃ£o foi possÃ­vel carregar o conteÃºdo.",
      "errorLowerText": "Atualize a pÃ¡gina e tente novamente.",
      "errorPopUpMessage": "Ocorreu um erro ao realizar essa aÃ§Ã£o."
    },
    "buttonLinks": {
      "guide": "Ir para Guia Vivo TV",
      "rented": "Ir para o inÃ­cio",
      "contents": "Ir para o inÃ­cio"
    },
    "table": {
      "titles": {
        "title": "TÃ­tulo",
        "genre": "Categoria",
        "state": "Status",
        "duration": "DuraÃ§Ã£o",
        "watched": "Visto em",
        "channel": "Canal",
        "recordingDate": "Gravado em",
        "added": "Adicionado em",
        "rented": "Alugado"
      },
      "rows": {
        "progressBar": {
          "completed": "Completo",
          "leftTime": "Restam {{value}}"
        },
        "cancel": "Cancelar",
        "delete": "Apagar",
        "nextEpisode": "PrÃ³ximo EpisÃ³dio",
        "remove": "Apagar",
        "watchlistRemove": "Remover da Minha Lista",
        "series": "SÃ©ries",
        "stopFollowing": "Deixar de Seguir",
        "stopFollowingInfo": "Vamos continuar {{name}}",
        "singleRecording": "GravaÃ§Ã£o Programada",
        "seriesRecording": "Temporada Programada",
        "fromBeginning": "Ver desde o inÃ­cio",
        "protect": "Bloquear",
        "unprotect": "Desbloquear",
        "warningNotTV": "DisponÃ­vel somente na sua Vivo TV",
        "errorRecording": "Erro de gravaÃ§Ã£o"
      }
    },
    "recordings": {
      "warningTitle": "AtenÃ§Ã£o",
      "seasonCancelWarning": "VocÃª apagarÃ¡ todas as temporadas.",
      "cancelMessage": "Certeza de que deseja cancelar?",
      "deleteMessage": "Certeza de que deseja apagar?",
      "notification": "VocÃª pode assistir aos conteÃºdos gravados em sua Vivo TV.",
      "cancelPopup": {
        "title": "Erro de gravaÃ§Ã£o",
        "message": "A gravaÃ§Ã£o serÃ¡ apagada automaticamente nos prÃ³ximos dias"
      }
    },
    "showAdults": "Exibir conteÃºdo adulto?"
  },
  "upselling": {
    "subscriptionAvailable": "DisponÃ­vel em",
    "message": {
      "title": "Ah...",
      "noContents": "NÃ£o hÃ¡ conteÃºdos disponÃ­veis no seu pacote",
      "someContents": "NÃ£o hÃ¡ mais conteÃºdos disponÃ­veis no seu pacote",
      "otherContents": "Alguns dos conteÃºdos que vocÃª poderÃ¡ encontrar em outras assinaturas",
      "seeMoreSubscriptions": "Ver outros conteÃºdos opcionais",
      "goToOnlineChannel": "Acesse o canal on-line para saber mais"
    }
  },
  "features": {
    "messages": {
      "transparentCatchupNotSupported": "Este navegador nÃ£o permite reproduzir conteÃºdo deste provedor. Recomendamos que use estes navegadores.",
      "upgradeChrome": "Esta versÃ£o do Chrome nÃ£o tem suporte para reproduÃ§Ã£o de vÃ­deo. Por favor, <a href='https://support.google.com/chrome/answer/95414'> atualize sua versÃ£o do Chrome</a> para acessar  os conteÃºdos Vivo Play.",
      "upgradeEdge": "Esta versÃ£o do Chrome nÃ£o tem suporte para reproduÃ§Ã£o de vÃ­deo. Por favor, <a href='https://support.google.com/chrome/answer/95414'> atualize sua versÃ£o do Chrome</a> para acessar  os conteÃºdos Vivo Play.",
      "upgradeFirefox": "Esta versÃ£o do Chrome nÃ£o tem suporte para reproduÃ§Ã£o de vÃ­deo. Por favor, <a href='https://support.google.com/chrome/answer/95414'> atualize sua versÃ£o do Chrome</a> para acessar  os conteÃºdos Vivo Play.",
      "firefoxXP": "ReproduÃ§Ã£o de vÃ­deo nÃ£o Ã© suportada em sistemas operacionais de Firefox para Windows XP. Por favor, selecione um dos navegadores suportados",
      "unsupportedBrowser": "ReproduÃ§Ã£o de vÃ­deo nÃ£o Ã© suportada em sistemas operacionais de Firefox para Windows XP. Por favor, selecione um dos navegadores suportados"
    },
    "title": {
      "upgradeChrome": "Atualize sua versÃ£o do Google Chrome",
      "upgradeEdge": "Atualize sua versÃ£o do Microsoft Edge",
      "upgradeFirefox": "Atualize sua versÃ£o do Microsoft Edge",
      "firefoxXP": "Isso nÃ£o pode ser reproduzido no XP",
      "unsupportedBrowser": "Isso nÃ£o pode ser reproduzido neste navegador"
    }
  },
  "sitemap": {
    "title": "Mapa do site",
    "general": "Geral",
    "catalog": "CatÃ¡logo",
    "home": "InÃ­cio",
    "settings": "ConfiguraÃ§Ãµes",
    "configuration": {
      "parentalPin": "CÃ³digo de pais",
      "purchasePin": "Senha de compra",
      "userInfo": "InformaÃ§Ãµes do usuÃ¡rio",
      "changePassword": "Alterar sua senha",
      "manageDevices": "Gerenciar Dispositivos",
      "notifications": "NotificaÃ§Ãµes",
      "mySubscriptions": "ServiÃ§os Contratados",
      "l7dRecordings": "GravaÃ§Ãµes",
      "playback": "ReproduÃ§Ã£o"
    },
    "tv": "Tv ao vivo",
    "live": "TV ao vivo",
    "now": "Agora",
    "epg": "Toda ProgramaÃ§Ã£o",
    "mytv": {
      "main": "Meu Vivo Play",
      "watched": "Recentes",
      "watchlist": "Minha Lista",
      "follow": "Seguindo",
      "rented": "Meus AluguÃ©is",
      "recordingsProgrammed": "GravaÃ§Ãµes Programadas",
      "recordingsAvailable": "GravaÃ§Ãµes DisponÃ­veis"
    },
    "loginMandatory": "Ã‰ necessÃ¡rio estar logado"
  },
  "seoMetadata": {
    "title": {
      "default": "Vivo Play",
      "home": "Minha TV - {{defaultTitle}}",
      "thematicArea": {
        "contents": "{{genre}} | {{category}} | CatÃ¡logo - {{defaultTitle}}",
        "contentsWithoutGenre": "{{category}} | CatÃ¡logo - {{defaultTitle}}",
        "rootCatchup": "TV ao Vivo - {{defaultTitle}}",
        "catchupChannelPage": "{{channel}} | Catalogo - {{defaultTitle}}"
      },
      "epg": {
        "now": "Ao vivo | Guia de TV - {{defaultTitle}}",
        "upcoming": "PrÃ³xima | Guia de TV - {{defaultTitle}}",
        "filter": "Filtro | Guia de TV - {{defaultTitle}}"
      },
      "sitemap": "Mapa do site - {{defaultTitle}}",
      "settings": "ConfiguraÃ§Ã£o - {{defaultTitle}}",
      "detail": {
        "default": "{{name}} - {{defaultTitle}}",
        "live": "{{name}} - TV ao Vivo - {{defaultTitle}}",
        "subscription": "{{name}} (filme) - Catalogo - {{defaultTitle}}"
      },
      "search": "Resultados de busca para {{search}} - {{defaultTitle}}",
      "myTV": {
        "watched": "Vistos | Minha TV - {{defaultTitle}}",
        "watchlist": "Vou ver | Minha TV - {{defaultTitle}}",
        "follow": "Seguindo | Minha TV - {{defaultTitle}}",
        "recordingsProgrammed": "GravaÃ§Ãµes agendadas | Minha TV - {{defaultTitle}}",
        "recordingsAvailable": "GravaÃ§Ãµes disponÃ­veis | Minha TV - {{defaultTitle}}",
        "rented": "Meus alugueis | Minha TV - {{defaultTitle}}"
      },
      "error": "Vivo Play",
      "registration": {
        "userSelection": "Cadastro | VocÃª Ã© um cliente Vivo Play?",
        "userInformation": "Cadastro | InformaÃ§Ãµes do usuÃ¡rio",
        "emailValidation": "Cadastro | Confirme seu email",
        "chooseSubscription": "Cadastro | Escolha uma assinatura",
        "userWelcome": "Cadastro | Bem-vindo ao serviÃ§o de",
        "emailConfirmation": "Cadastro | Confirme seu email"
      },
      "panic": "ConteÃºdo em destaque",
      "welcome": "Bem vindo",
      "amazonActivation": "AtivaÃ§Ã£o Prime Video"
    },
    "description": {
      "default": "Desfrute com {{defaultTitle}} de TV ao vivo, esportes e o catÃ¡logo com os melhores filmes e sÃ©ries online em qualquer lugar do seu computador",
      "home": "O mais amplo catÃ¡logo de filmes, sÃ©ries e esportes transmitidos do seu computador com {{defaultTitle}}",
      "thematicArea": {
        "contents": "CatÃ¡logo de {{category}} ({{genre}}) para ver online grÃ¡tis quando e onde quiser {{defaultTitle}}",
        "contentsWithoutGenre": "CatÃ¡logo de {{genre}} de {{category}} para assistir a assinatura on-line livre e baixa quando quiser e onde quiser com {{defaultTitle}}",
        "rootCatchup": "TV ao Vivo. Filmes, sÃ©ries, esportes, programas e muito mais para visualizaÃ§Ã£o online do seu computador com {{defaultTitle}}",
        "catchupChannelPage": "Canal {{channel}} para ver online grÃ¡tis quando e onde quiser {{defaultTitle}}"
      },
      "live": "TV ao vivo  {{defaultTitle}}",
      "epg": {
        "now": "ProgramaÃ§Ã£o de TV neste momento com os melhores canais em streaming. Guia de TV {{defaultTitle}}",
        "upcoming": "ProgramaÃ§Ã£o de televisÃ£o do dia com os melhores canais em streaming. Guia de TV {{defaultTitle}}"
      },
      "sitemap": "Mapa do site - {{defaultTitle}}",
      "settings": "As configuraÃ§Ãµes de conta de usuÃ¡rio {{defaultTitle}}",
      "detail": {
        "movie": "Ver o filme {{name}} em {{defaultTitle}}. {{description}}",
        "serie": "Ver {{name}} {{defaultTitle}} sÃ©rie. {{description}}",
        "subscription": "Contratar o serviÃ§o{{name}} em {{defaultTitle}}. {{description}}",
        "default": "Ver {{name}} em {{defaultTitle}}. {{description}}"
      },
      "search": "Resultado de busca para filmes, sÃ©ries e conteÃºdos  __search__",
      "myTV": {
        "watched": "Lista de filmes e sÃ©ries alugados em meu conteÃºdo de {{defaultTitle}}",
        "watchlist": "Lista de filmes e sÃ©ries marcado para ver no meu conteÃºdo de {{defaultTitle}}",
        "follow": "Lista de filmes e sÃ©ries alugados em meu conteÃºdo de {{defaultTitle}}",
        "recordingsProgrammed": "GravaÃ§Ãµes agendadas em meu conteÃºdo de {{defaultTitle}}",
        "recordingsAvailable": "GravaÃ§Ãµes disponÃ­veis em meu conteÃºdo de {{defaultTitle}}",
        "rented": "Lista de filmes e sÃ©ries alugados em meu conteÃºdo de {{defaultTitle}}"
      },
      "panic": "ConteÃºdo de TV em destaque",
      "welcome": "Bem vindo ao serviÃ§o Vivo Play",
      "amazonActivation": "Ã‰ necessÃ¡rio que vocÃª ative sua conta do Amazon para aproveitar todo o conteÃºdo do Amazon Prime Video atravÃ©s do Vivo Play."
    }
  },
  "seoMicrodata": {
    "website": {
      "name": "Vivo Play",
      "alternateName": "Vivo Play : Para assistir quando e onde quiser",
      "text": "Assista o conteÃºdo Vivo Play a qualquer hora e em qualquer lugar."
    },
    "organization": {
      "name": "Telefonica Vivo",
      "url": "https://www.vivoplay-vivo.com.br",
      "logo": "https://www.movistar.es/estaticos/img/H2_logo_telefonica.jpg"
    }
  },
  "userRegistration": {
    "registrationLink": {
      "title": "NÃ£o tem cadastro no Meu Vivo?",
      "button": "Cadastre-se aqui"
    },
    "registrationError": "Ocorreu um erro. Por favor, verifique os dados digitados ou tente novamente mais tarde.",
    "registrationLoadingError": "HÃ¡ um erro no sistema e nÃ£o Ã© possÃ­vel registrar.",
    "registrationProcess": "Registrando usuÃ¡rio...",
    "registrationCallCenter": "Acesse o portal do Meu Vivo em meuvivo.vivo.com.br/meuvivo ou App Meu Vivo Fixo vivo.com.br/appfixo.",
    "registrationCallPhone": "Ligue para 103 15 e assine o Vivo Play.",
    "userSelection": {
      "header": "Registo no movistar TV ir",
      "title": "VocÃª estÃ¡ atualmente, clientes Vivo Play?",
      "tefUser": "Eu nÃ£o sou um usuÃ¡rio de telefone",
      "noTefUser": "Eu nÃ£o sou um usuÃ¡rio de telefone",
      "loginLink": "NÃ£o Ã© usuÃ¡rio Vivo Play?",
      "login": "Entrar"
    },
    "chooseSubscription": {
      "activatePaymentMethod": "Ativar o mÃ©todo de pagamento",
      "title": "Escolha uma assinatura",
      "errorInSubs": "Oops! Ocorreu um erro. Por favor, tente novamente mais tarde.",
      "errorNoSubsNorVod": "Ocorreu um erro no serviÃ§o, certo, agora nÃ£o podemos te oferecer esta informaÃ§Ã£o",
      "noSubsWarningTitle": "AtenÃ§Ã£o",
      "noSubsWarningMsg": "<p>NÃ£o ter escolhido qualquer subscriÃ§Ã£o.</p> <p>Pode ainda desfrutar de conteÃºdo de pagamento.</p> <p>VocÃª vai entÃ£o enviar para o gateway de pagamento para atribuir um serviÃ§o cartÃ£o.</p> <p>Tem certeza que deseja continuar?</p>"
    },
    "transactionalBanner": {
      "title": "EstrÃ©ias",
      "info": "AlÃ©m disso, pode sempre desfrutar de conteÃºdos de pagamento"
    },
    "header": {
      "userInformation": "ConfiguraÃ§Ãµes da Conta",
      "emailValidation": "ConfirmaÃ§Ã£o de e-mail",
      "chooseSubscription": "Escolha uma assinatura",
      "paymentMethod": "Forma de pagamento"
    },
    "userInformation": {
      "title": "Precisamos de alguns dados para criar a conta...",
      "requiredFields": "Campos obrigatÃ³rios",
      "conditions": "Clicando nesta caixa, vocÃª concorda com os <a target=\"_blank\" href=\"__conditionsLink__\" title=\"TÃ©rminos y condiciones\"> termos e condiÃ§Ãµes</a> e a polÃ­tica de privacidade do serviÃ§o",
      "submit": "Continuar",
      "passwordConfirmation": "As senhas devem ser iguais",
      "existingEmail": "Este e-mail jÃ¡ estÃ¡ ativo no Vivo Play",
      "pendingActivation": "Este usuÃ¡rio estÃ¡ pendente de ativaÃ§Ã£o, verifique sua caixa de e-mail",
      "minimumAgeRequired": "Desculpe, que vocÃª nÃ£o tem a idade mÃ­nima para se registrar no Vivo Play",
      "requiredFieldsError": "Aconteceu um erro em seu registro, porque nÃ£o ter preenchidos os campos obrigatÃ³rios. Verifique seus dados e tente novamente",
      "repeatPassword": "Re-digite a Senha"
    },
    "emailValidation": {
      "title": "Enviamos um e-mail para confirmar seu cadastro.",
      "continue": "Para continuar, por favor clique no link no e-mail."
    },
    "userWelcome": {
      "title": "Bem-vindo ao Vivo Play",
      "error": "JÃ¡ criamos seu usuÃ¡rio, mas algo deu errado e nÃ£o temos de comprar suas assinaturas. Verifique se vocÃª tem o cartÃ£o com equilÃ­brio e <b>vÃ¡ para configuraÃ§Ãµes / minhas subscriÃ§Ãµes</b> e tente novamente",
      "start": "Comece a aproveitar o Vivo Play",
      "subsPurchased": "Assinaturas contratadas:",
      "noSubs": "Nenhuma",
      "purchasingPopup": "Aguarde alguns segundos enquanto terminamos o registro...",
      "somePurchasesFailed": "A compra de qualquer de suas assinaturas falhou. <b>VÃ¡ para configuraÃ§Ãµes / minhas subscriÃ§Ãµes</b> e tente novamente",
      "errorGettingSubscriptions": "NÃ³s nÃ£o foi possÃ­vel carregar esta informaÃ§Ã£o. VÃ¡ para <b>configuraÃ§Ãµes / minhas subscriÃ§Ãµes</b> e tente novamente"
    }
  },
  "thematicArea": {
    "typeOfContent": "Tipo de conteÃºdo",
    "sorting": "Ordem",
    "applyFilters": "Aplicar filtros",
    "noContent": "NÃ£o hÃ¡ nenhum conteÃºdo nesta Ã¡rea"
  },
  "l7d": {
    "legalConditions": "Com o Reprise vocÃª pode voltar a programaÃ§Ã£o de alguns canais ao vivo e ainda, consegue pausar, avanÃ§ar e retroceder o conteÃºdo que estÃ¡ assistindo.",
    "popup": {
      "title": "AtivaÃ§Ã£o Reprise",
      "button": "Ativar",
      "checkbox": "Ativar o serviÃ§o Reprise",
      "moreInfo": "VocÃª pode desabilitar esse serviÃ§o, acessando as configuraÃ§Ãµes > GravaÃ§Ãµes > Reprise",
      "activationOk": "A ativaÃ§Ã£o do serviÃ§o Reprise foi completada com sucesso!",
      "activationError": "VocÃª nÃ£o pode executar a ativaÃ§Ã£o do serviÃ§o Reprise. Tente novamente mais tarde",
      "playingError": "Para assistir os conteÃºdos de Reprise, vocÃª deverÃ¡ aceitar o contrato de serviÃ§os",
      "deactivationOk": "A desativaÃ§Ã£o do serviÃ§o Reprise foi realizada com sucesso.",
      "deactivationError": "VocÃª nÃ£o pode executar a desativaÃ§Ã£o do serviÃ§o Reprise. Tente novamente mais tarde"
    },
    "goToChannel": "Reprise"
  },
  "restartTV": {
    "fromBeginning": "Ver desde o inicio"
  },
  "netflix": {
    "error": {
      "title": "Ops!!",
      "message": "Ocorreu um erro inesperado. Tente novamente mais tarde"
    }
  },
  "placards": {
    "playFromBeginning": "Ver desde o inicio",
    "playLive": "Assista ao vivo",
    "playChannel": "Assistir ao vivo",
    "playVod": "Assistir",
    "resumeVod": "Continuar assistindo",
    "playTrailer": "Assista o trailer",
    "goToDetails": "Mais informaÃ§Ãµes",
    "goToChannel": "Reprise",
    "goToDetailsVod": "Mais informaÃ§Ãµes",
    "goToLink": "Ir para {{contentTitle}}",
    "rentFrom": "Alugue por",
    "rent": "Alugar",
    "subscribe": "Assine o pacote",
    "rentContent": "Alugar",
    "subscribeContent": "Assine",
    "trianglePrice": "Aluguel de <b>{{price}}</b>"
  },
  "panic": {
    "title": "VocÃª esta procurando por este conteÃºdo?",
    "link": "NÃ£o, obrigado"
  },
  "welcome": {
    "header": "Bem vindo, {{username}}",
    "description": "VocÃª receberÃ¡ um e-mail de boas vindas para o serviÃ§o Vivo Play.",
    "purchasePin": "Sua Senha de Compra Ã© {{purchasePin}}",
    "parentalPin": "Sua Senha de Controle dos Pais Ã© {{parentalPin}}",
    "myAccount": "VocÃª pode {count, plural, one{modificar} other{modificÃ¡-los}} na Ã¡rea Minha conta",
    "start": "ComeÃ§ar"
  },
  "amazon": {
    "activation": {
      "description1": "Ã‰ necessÃ¡rio que vocÃª ative sua conta do Amazon para aproveitar todo o conteÃºdo do Amazon Prime Video atravÃ©s do Vivo Play.",
      "description2": "Assista a milhares de filmes e sÃ©ries no Amazon Prime Video em atÃ© trÃªs dispositivos ao mesmo tempo.",
      "start": "Ativar Prime Video"
    }
  },
  "ES-LAS": "Espanhol",
  "la-LA": "LatinAmerica",
  "zu-ZA": "isiZulu",
  "zh-TW": "ChinÃªs",
  "zh-SG": "ChinÃªs",
  "zh-MO": "ChinÃªs",
  "zh-HK": "ChinÃªs",
  "yo-NG": "Yoruba",
  "xh-ZA": "isiXhosa",
  "wo-SN": "Wolof",
  "vi-VN": "Vietnamita",
  "ur-PK": "Urdu",
  "uk-UA": "Ucraniano",
  "ug-CN": "Uyghur",
  "tt-RU": "Tatar",
  "tn-ZA": "Setswana",
  "tk-TM": "Turkmen",
  "te-IN": "Telugu",
  "ta-IN": "Tamil",
  "syr-SY": "SirÃ­aco",
  "sw-KE": "Kiswahili",
  "sv-SE": "Sueco",
  "sv-FI": "Sueco",
  "sq-AL": "AlbanÃªs",
  "sms-FI": "Sami",
  "smn-FI": "Sami",
  "smj-SE": "Sami",
  "smj-NO": "Sami",
  "sma-SE": "Sami",
  "sma-NO": "Sami",
  "sl-SI": "Esloveno",
  "sk-SK": "Eslovaco",
  "si-LK": "Sinhala",
  "se-SE": "Sami",
  "se-NO": "Sami",
  "se-FI": "Sami",
  "sa-IN": "SÃ¢nscrito",
  "sah-RU": "Yakut",
  "rw-RW": "Kinyarwanda",
  "ru-RU": "Russo",
  "ro-RO": "Romena\n",
  "rm-CH": "Romansh",
  "quz-PE": "Quechua",
  "quz-EC": "Quechua",
  "quz-BO": "Quechua",
  "qut-GT": "K'iche",
  "ps-AF": "Pashto",
  "prs-AF": "Dari",
  "pl-PL": "PolonÃªs",
  "pa-IN": "Punjabi",
  "or-IN": "Oriya",
  "oc-FR": "Occitano",
  "nso-ZA": "Sesotho sa Leboa",
  "nn-NO": "NorueguÃªs",
  "nl-NL": "HolandÃªs",
  "nl-BE": "HolandÃªs",
  "ne-NP": "NepalÃªs",
  "nb-NO": "NorueguÃªs",
  "mt-MT": "MaltÃªs",
  "ms-MY": "Malaio",
  "ms-BN": "Malaio",
  "mr-IN": "Marathi",
  "moh-CA": "Moicano",
  "mn-MN": "Mongol",
  "ml-IN": "Malaiala",
  "mk-MK": "MacedÃ´nio",
  "mi-NZ": "Maori",
  "lv-LV": "LetÃ£o",
  "lt-LT": "Lituano",
  "lo-LA": "Lao",
  "lb-LU": "LuxemburguÃªs",
  "ky-KG": "Kyrgyz",
  "kok-IN": "Konkani",
  "kn-IN": "Kannada",
  "km-KH": "Khmer",
  "kl-GL": "GronelandÃªs",
  "hu-HU": "HÃºngaro",
  "ka-GE": "Georgiano",
  "it-CH": "Italiano",
  "kk-KZ": "Cazaque",
  "ig-NG": "Igbo",
  "is-IS": "IslandÃªs\n",
  "ii-CN": "Yi",
  "id-ID": "IndonÃ©sio",
  "hy-AM": "ArmÃªnio",
  "hsb-DE": "Upper Sorbian",
  "hr-HR": "Croata",
  "hr-BA": "Croatian",
  "hi-IN": "Hindi",
  "gu-IN": "Gujarati",
  "gsw-FR": "Alsaciano",
  "gl-ES": "Galego",
  "gd-GB": "GaÃ©lico EscocÃªs\n",
  "ga-IE": "IrlandÃªs",
  "fy-NL": "Frisian",
  "fr-MC": "FrancÃªs",
  "fr-LU": "FrancÃªs",
  "fr-CH": "FrancÃªs",
  "fr-CA": "FrancÃªs",
  "fr-BE": "FrancÃªs",
  "fo-FO": "FeroÃªs",
  "fil-PH": "Filipino",
  "fi-FI": "FinlandÃªs",
  "fa-IR": "Persa",
  "eu-ES": "Euskera",
  "et-EE": "Estoniano",
  "es-VE": "Espanhol",
  "es-UY": "Espanhol",
  "es-US": "Espanhol",
  "es-SV": "Espanhol",
  "es-PY": "Espanhol",
  "es-PR": "Espanhol",
  "es-PE": "Espanhol",
  "es-PA": "Espanhol",
  "es-NI": "Espanhol",
  "es-HN": "Espanhol",
  "es-GT": "Espanhol",
  "es-EC": "Espanhol",
  "es-DO": "Espanhol",
  "es-CR": "Espanhol",
  "es-CO": "Espanhol",
  "es-BO": "Espanhol",
  "en-ZW": "InglÃªs",
  "en-ZA": "InglÃªs",
  "en-TT": "InglÃªs",
  "en-SG": "InglÃªs",
  "en-PH": "InglÃªs",
  "en-NZ": "InglÃªs",
  "en-MY": "InglÃªs",
  "en-JM": "InglÃªs",
  "en-IN": "InglÃªs",
  "en-IE": "InglÃªs",
  "en-CA": "InglÃªs",
  "en-BZ": "InglÃªs",
  "en-029": "InglÃªs",
  "el-GR": "Grego",
  "dv-MV": "Divehi",
  "dsb-DE": "Lower Sorbian",
  "de-LU": "AlemÃ£o",
  "de-LI": "AlemÃ£o",
  "de-CH": "AlemÃ£o",
  "de-AT": "AlemÃ£o",
  "da-DK": "DinamarquÃªs",
  "cy-GB": "GalÃªs",
  "cs-CZ": "Czech",
  "co-FR": "Corso",
  "ca-ES": "CatalÃ£o",
  "br-FR": "Breton",
  "bo-CN": "Tibetano",
  "bn-IN": "Bengali",
  "bn-BD": "Bengali",
  "bg-BG": "BÃºlgaro",
  "be-BY": "Belarus",
  "ba-RU": "Bashkir",
  "as-IN": "Assamese",
  "ar-YE": "Ãrabe",
  "ar-TN": "Ãrabe",
  "ar-SY": "Ãrabe",
  "ar-SA": "Ãrabe",
  "ar-QA": "Ãrabe",
  "ar-OM": "Ãrabe",
  "arn-CL": "Mapudungun",
  "ar-MA": "Ãrabe",
  "ar-LY": "Ãrabe",
  "ar-LB": "Ãrabe",
  "ar-KW": "Ãrabe",
  "ar-JO": "Ãrabe",
  "ar-IQ": "Ãrabe",
  "ar-EG": "Ãrabe",
  "ar-DZ": "Ãrabe",
  "ar-BH": "Ãrabe",
  "ar-AE": "Ãrabe",
  "tr-TR": "Turco",
  "ja-JP": "JaponÃªs",
  "en-AU": "InglÃªs",
  "he-IL": "Hebraico",
  "zh-CN": "ChinÃªs",
  "es-MX": "Espanhol",
  "en-GB": "InglÃªs",
  "it-IT": "Italiano",
  "es-CL": "Espanhol",
  "th-TH": "TailandÃªs\n",
  "de-DE": "AlemÃ£o",
  "ko-KR": "Coreano",
  "am-ET": "Amharic",
  "pt-PT": "PortuguÃªs",
  "es-AR": "Espanhol",
  "fr-FR": "FrancÃªs",
  "pt-BR": "PortuguÃªs",
  "es-ES": "Espanhol",
  "en-US": "InglÃªs"
}
);
/* eslint-enable max-len */
