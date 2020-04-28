const stocksList = [
  'ABEV3',
  'AZUL4',
  'B3SA3',
  'BBAS3',
  'BBDC3',
  'BBDC4',
  'BBSE3',
  'BPAC11',
  'BRAP4',
  'BRDT3',
  'BRFS3',
  'BRKM5',
  'BRML3',
  'BTOW3',
  'CCRO3',
  'CIEL3',
  'CMIG4',
  'COGN3',
  'CRFB3',
  'CSAN3',
  'CSNA3',
  'CVCB3',
  'CYRE3',
  'ECOR3',
  'EGIE3',
  'ELET3',
  'ELET6',
  'EMBR3',
  'ENBR3',
  'EQTL3',
  'FLRY3',
  'GGBR4',
  'GNDI3',
  'GOAU4',
  'GOLL4',
  'HAPV3',
  'HGTX3',
  'HYPE3',
  'IGTA3',
  'IRBR3',
  'ITSA4',
  'ITUB4',
  'JBSS3',
  'KLBN11',
  'LAME4',
  'LREN3',
  'MGLU3',
  'MRFG3',
  'MRVE3',
  'MULT3',
  'NTCO3',
  'PCAR3',
  'PETR3',
  'PETR4',
  'QUAL3',
  'RADL3',
  'RAIL3',
  'RENT3',
  'SANB11',
  'SBSP3',
  'SMLS3',
  'SULA11',
  'SUZB3',
  'TAEE11',
  'TIMP3',
  'TOTS3',
  'UGPA3',
  'USIM5',
  'VALE3',
  'VIVT4',
  'VVAR3',
  'WEGE3',
  'YDUQ3',
  'VIVA3'
];

const stockObj = [
  ['AALR3 ', ' - ALLIAR'],
  ['ABCB4', ' - ABC Brasil'],
  ['ABEV3', ' - AMBEV S/A'],
  ['ADHM3', ' - VITALYZE.ME'],
  ['AFLT3', ' - AFLUENTE T'],
  ['AGRO3', ' - BRASILAGRO'],
  ['AHEB3', ' - PARQUE ANHEMBI'],
  ['AHEB5', ' - PARQUE ANHEMBI'],
  ['ALPA4', ' - ALPARGATAS'],
  ['ALPA3', ' - ALPARGATAS'],
  ['ALSO3', ' - ALIANSCSONAE'],
  ['ALUP11', ' - ALUPAR'],
  ['ALUP3', ' - ALUPAR'],
  ['ALUP4', ' - ALUPAR'],
  ['AMAR3', ' - LOJAS MARISA'],
  ['ANIM3', ' - ANIMA'],
  ['APER3', ' - ALPER S.A.'],
  ['ARZZ3', ' - AREZZO CO'],
  ['ATOM3', ' - ATOMPAR'],
  ['AZEV4', ' - AZEVEDO & TRAVASSOS'],
  ['AZEV3', ' - AZEVEDO & TRAVASSOS'],
  ['AZUL4', ' - AZUL'],
  ['B3SA3', ' - B3'],
  ['BAHI3', ' - BAHEMA'],
  ['BALM4', ' - BAUMER'],
  ['BALM3', ' - BAUMER'],
  ['BAUH4', ' - EXCELSIOR'],
  ['BAZA3', ' - BANCO DA AMAZONIA S.A.'],
  ['BBAS3', ' - BANCO DO BRASIL S.A.'],
  ['BBDC4', ' - BANCO BRADESCO S.A.'],
  ['BBDC3', ' - BANCO BRADESCO S.A.'],
  ['BBRK3', ' - BR Brokers'],
  ['BBSE3', ' - BBSEGURIDADE'],
  ['BDLL4', ' - BAEDELLA'],
  ['BEEF3', ' - Minerva'],
  ['BEES3', ' - BANESTES S/A'],
  ['BEES4', ' - BANESTES S/A'],
  ['BGIP4', ' - BANESE'],
  ['BGIP3', ' - BANESE'],
  ['BIDI11', ' - INTER BANCO'],
  ['BIDI4', ' - INTER BANCO'],
  ['BIDI3', ' - INTER BANCO'],
  ['BIOM3', ' - BIOMM SA'],
  ['BKBR3', ' - BK BRASIL'],
  ['BMEB4', ' - BANCO MERCANTIL DO BRASIL S/A'],
  ['BMEB3', ' - BANCO MERCANTIL DO BRASIL S/A'],
  ['BMGB4', ' - BANCO BMG'],
  ['BMIN3', ' - BANCO MERCANTIL DE INVESTIMENTOS SA'],
  ['BMIN4', ' - BANCO MERCANTIL DE INVESTIMENTOS SA'],
  ['BMKS3', ' - MONARK'],
  ['BNBR3', ' - BANCO DO NORDESTE'],
  ['BOBR4', ' - BOMBRIL SA'],
  ['BPAC11', ' - BTGP BANCO'],
  ['BPAC3', ' - BTGP BANCO'],
  ['BPAC5', ' - BTGP BANCO'],
  ['BPAN4', ' - BANCO PAN'],
  ['BRAP4', ' - BRADESPAR S/A'],
  ['BRAP3', ' - BRADESPAR S/A'],
  ['BRDT3', ' - PETROBRAS BR'],
  ['BRFS3', ' - BRF Foods'],
  ['BRGE12', ' - CONSORCIO ALFA'],
  ['BRGE3', ' - CONSORCIO ALFA'],
  ['BRGE6', ' - CONSORCIO ALFA'],
  ['BRGE8', ' - CONSORCIO ALFA'],
  ['BRGE11', ' - CONSORCIO ALFA'],
  ['BRIV4', ' - ALFA DE INVESTIMENTO'],
  ['BRIV3', ' - ALFA DE INVESTIMENTO'],
  ['BRKM5', ' - BRASKEM'],
  ['BRKM3', ' - BRASKEM'],
  ['BRKM6', ' - BRASKEM'],
  ['BRML3', ' - BR MALLS PARTICIPAÇÔES S/A'],
  ['BRPR3', ' - BR PROPERTIES'],
  ['BRSR6', ' - BANRISUL S/A'],
  ['BRSR3', ' - BANRISUL S/A'],
  ['BRSR5', ' - BANRISUL S/A'],
  ['BSEV3', ' - BIOSEV'],
  ['BSLI3', ' - BRB'],
  ['BSLI4', ' - BRB'],
  ['BTOW3', ' - B2W - COMPANHIA GLOBAL DO VAREJO'],
  ['BTTL3', ' - APABA'],
  ['CALI4', ' - CAL S/A'],
  ['CAMB3', ' - PENALTY'],
  ['CAML3', ' - CAMIL'],
  ['CARD3', ' - CSU CARDSYST'],
  ['CBEE3', ' - AMPLA ENERG'],
  ['CCPR3', ' - CYRELA COMMERCIAL PROPERTIES SA EMP PART'],
  ['CCRO3', ' - COMPANHIA DE CONCESSÕES RODOVIÁRIAS'],
  ['CEAB3', ' - CEA MODAS'],
  ['CEBR6', ' - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA'],
  ['CEBR3', ' - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA'],
  ['CEBR5', ' - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA'],
  ['CEDO4', ' - CIA. DE FIAÇÃO E TECIDOS CEDRO CACHOEIRA'],
  ['CEDO3', ' - CIA. DE FIAÇÃO E TECIDOS CEDRO CACHOEIRA'],
  ['CEEB3', ' - COELBA'],
  ['CEED3', ' - CEEE-D'],
  ['CEGR3', ' - CEG'],
  ['CEPE5', ' - CELPE'],
  ['CEPE6', ' - CELPE'],
  ['CESP6', ' - CESP CIA ENERGETICA SAO PAULO'],
  ['CESP3', ' - CESP CIA ENERGETICA SAO PAULO'],
  ['CESP5', ' - CESP CIA ENERGETICA SAO PAULO'],
  ['CGAS5', ' - COMPANHIA DE GÁS DE SÃO PAULO - COMGÁS'],
  ['CGAS3', ' - COMPANHIA DE GÁS DE SÃO PAULO - COMGÁS'],
  ['CGRA4', ' - GRAZZIOTIN'],
  ['CGRA3', ' - GRAZZIOTIN'],
  ['CIEL3', ' - CIELO'],
  ['CLSC4', ' - CELESC'],
  ['CLSC3', ' - CELESC'],
  ['CMIG4', ' - CEMIG'],
  ['CMIG3', ' - CEMIG'],
  ['CNTO3', ' - CENTAURO'],
  ['COCE5', ' - CIA ENERG CEARA - COELCE'],
  ['COCE3', ' - CIA ENERG CEARA - COELCE'],
  ['COGN3', ' - COGNA'],
  ['CORR4', ' - CORREA RIBEIRO SA COM. IND.'],
  ['CPFE3', ' - CPFL ENERGIA S.A.'],
  ['CPLE6', ' - COPEL'],
  ['CPLE3', ' - COPEL'],
  ['CPRE3', ' - CPFL RENOVAV'],
  ['CRDE3', ' - CR2'],
  ['CRFB3', ' - CARREFOUR BR'],
  ['CRIV4', ' - ALFA FINANCEIRA'],
  ['CRIV3', ' - ALFA FINANCEIRA'],
  ['CRPG5', ' - CRISTAL'],
  ['CRPG6', ' - CRISTAL'],
  ['CRPG3', ' - CRISTAL'],
  ['CSAB3', ' - COMPANHIA DE SEGUROS ALIANÇA DA BAHIA'],
  ['CSAB4', ' - COMPANHIA DE SEGUROS ALIANÇA DA BAHIA'],
  ['CSAN3', ' - COSAN SA INDUSTRIA E COMERCIO'],
  ['CSMG3', ' - COPASA MG'],
  ['CSNA3', ' - CSN'],
  ['CSRN3', ' - COSERN'],
  ['CTKA4', ' - KARSTEN'],
  ['CTKA3', ' - KARSTEN'],
  ['CTNM4', ' - COTEMINAS'],
  ['CTNM3', ' - COTEMINAS'],
  ['CTSA3', ' - SANTANENSE'],
  ['CTSA4', ' - SANTANENSE'],
  ['CVCB3', ' - CVC BRASIL'],
  ['CYRE3', ' - CYRELA BRAZIL REALTY'],
  ['DASA3', ' - DIAGNOSTICOS DA AMERICA SA'],
  ['DIRR3', ' - Direcional Engenharia'],
  ['DMMO3', ' - DOMMO'],
  ['DOHL4', ' - DOHLER'],
  ['DTCY3', ' - DTCOM'],
  ['DTEX3', ' - DURATEX'],
  ['EALT4', ' - ELECTRO AÇO ALTONA S/A'],
  ['EALT3', ' - ELECTRO AÇO ALTONA S/A'],
  ['ECOR3', ' - ECORODOVIAS'],
  ['ECPR3', ' - ENCORPAR'],
  ['ECPR4', ' - ENCORPAR'],
  ['EEEL4', ' - CEEE'],
  ['EEEL3', ' - CEEE'],
  ['EGIE3', ' - 	ENGIE BRASIL'],
  ['EKTR4', ' - ELEKTRO ELETRICIDADE E SERVIÇOS S.A.'],
  ['EKTR3', ' - ELEKTRO ELETRICIDADE E SERVIÇOS S.A.'],
  ['ELEK4', ' - ELEKEIROZ S/A'],
  ['ELEK3', ' - ELEKEIROZ S/A'],
  ['ELET3', ' - ELETROBRÁS'],
  ['ELET6', ' - ELETROBRÁS'],
  ['ELET5', ' - ELETROBRÁS'],
  ['EMAE4', ' - EMAE'],
  ['EMBR3', ' - EMBRAER'],
  ['ENAT3', ' - ENAUTA PART'],
  ['ENBR3', ' - EDP ENERGIAS DO BRASIL S/A'],
  ['ENEV3', ' - ENEVA'],
  ['ENGI11', ' - ENERGISA'],
  ['ENGI3', ' - ENERGISA'],
  ['ENGI4', ' - ENERGISA'],
  ['ENMT3', ' - ENERGISA MT'],
  ['ENMT4', ' - ENERGISA MT'],
  ['EQPA3', ' - EQTL PARA'],
  ['EQPA5', ' - EQTL PARA'],
  ['EQPA7', ' - EQTL PARA'],
  ['EQPA6', ' - EQTL PARA'],
  ['EQTL3', ' - EQUATORIAL ENERGIA S.A.'],
  ['ESTR4', ' - ESTRELA'],
  ['ETER3', ' - ETERNIT'],
  ['EUCA4', ' - EUCATEX'],
  ['EUCA3', ' - EUCATEX'],
  ['EVEN3', ' - Even'],
  ['EZTC3', ' - EZTec'],
  ['FESA4', ' - FERBASA'],
  ['FESA3', ' - FERBASA'],
  ['FHER3', ' - Fer Heringer'],
  ['FLRY3', ' - FLEURY'],
  ['FRAS3', ' - FRAS-LE S.A.'],
  ['FRIO3', ' - Metalfrio'],
  ['FRTA3', ' - POMIFRUTAS'],
  ['GBIO33', ' - BIOTOSCANA'],
  ['GEPA4', ' - DUKE ENERGY INT,GERAÇÃO PARANAPANEMA SA'],
  ['GEPA3', ' - DUKE ENERGY INT,GERAÇÃO PARANAPANEMA SA'],
  ['GFSA3', ' - GAFISA'],
  ['GGBR4', ' - GERDAU S.A.'],
  ['GGBR3', ' - GERDAU S.A.'],
  ['GNDI3', ' - INTERMEDICA'],
  ['GOAU4', ' - METALÚRGICA GERDAU'],
  ['GOAU3', ' - METALÚRGICA GERDAU'],
  ['GOLL4', ' - GOL LINHAS AEREAS INTELIGENTES SA'],
  ['GPCP3', ' - GPC PARTICIPACOES SA'],
  ['GPIV33', ' - GP INVESTMENTS, LTD'],
  ['GRND3', ' - GRENDENE SA'],
  ['GSHP3', ' - Generalshopp'],
  ['GUAR3', ' - GUARARAPES CONFECÇÕES'],
  ['HAGA4', ' - HAGA'],
  ['HAGA3', ' - HAGA'],
  ['HAPV3', ' - HAPVIDA'],
  ['HBOR3', ' - Helbor'],
  ['HBTS5', ' - CIA HABITASUL'],
  ['HETA4', ' - HERCULES S/A'],
  ['HGTX3', ' - CIA HERING'],
  ['HOOT4', ' - HOTEIS OTHON S.A.'],
  ['HYPE3', ' - HYPERA'],
  ['IDNT3', ' - IDEIASNET'],
  ['IDVL3', ' - Indusval'],
  ['IDVL4', ' - Indusval'],
  ['IGBR3', ' - GRADIENTE'],
  ['IGTA3', ' - IGUATEMI'],
  ['INEP4', ' - INEPAR S/A'],
  ['INEP3', ' - INEPAR S/A'],
  ['IRBR3', ' - IRBBRASIL RE'],
  ['ITSA4', ' - ITAÚSA'],
  ['ITSA3', ' - ITAÚSA'],
  ['ITUB4', ' - ITAUUNIBANCO'],
  ['ITUB3', ' - ITAUUNIBANCO'],
  ['JBDU4', ' - J B DUARTE'],
  ['JBDU3', ' - J B DUARTE'],
  ['JBSS3', ' - JBS'],
  ['JFEN3', ' - JOÃO FORTES ENGENHARIA S.A.'],
  ['JHSF3', ' - JHSF Part'],
  ['JOPA3', ' - JOSAPAR S/A'],
  ['JOPA4', ' - JOSAPAR S/A'],
  ['JPSA3', ' - JEREISSATI PARTICIPACOES'],
  ['JSLG3', ' - JULIO SIMOES'],
  ['KEPL3', ' - KEPLER WEBER SA'],
  ['KLBN11', ' - KLABIN'],
  ['KLBN4', ' - KLABIN'],
  ['KLBN3', ' - KLABIN'],
  ['LAME4', ' - LOJAS AMERICANAS S.A.'],
  ['LAME3', ' - LOJAS AMERICANAS S.A.'],
  ['LCAM3', ' - LOCAMERICA'],
  ['LEVE3', ' - MAHLE METAL LEVE'],
  ['LIGT3', ' - LIGHT SA'],
  ['LINX3', ' - LINX'],
  ['LIPR3', ' - LIGHTPAR'],
  ['LIQO3', ' - LIQ'],
  ['LLIS3', ' - LE LIS BLANC DEUX'],
  ['LOGG3', ' - LOG COM PROP'],
  ['LOGN3', ' - Log-In'],
  ['LPSB3', ' - LOPES BRASIL'],
  ['LREN3', ' - RENNER'],
  ['LUPA3', ' - LUPATECH'],
  ['LUXM4', ' - TREVISA INVESTIMENTOS SA'],
  ['LWSA3', ' - LOCAWEB'],
  ['MAPT4', ' - CIA MARCOPOLO'],
  ['MDIA3', ' - M.DIASBRANCO'],
  ['MDNE3', ' - MOURA DUBEUX'],
  ['MEAL3', ' - IMC S/A'],
  ['MERC4', ' - MERCANTIL BRASIL'],
  ['MGEL4', ' - MANGELS'],
  ['MGLU3', ' - MAGAZ LUIZA'],
  ['MILS3', ' - MILLS'],
  ['MMXM3', ' - MMX MINER'],
  ['MNDL3', ' - MUNDIAL S/A'],
  ['MNPR3', ' - MINUPAR'],
  ['MOAR3', ' - MONTEIRO ARANHA'],
  ['MOVI3 ', ' - MOVIDA'],
  ['MRFG3', ' - Marfrig'],
  ['MRVE3', ' - MRV'],
  ['MSPA3', ' - MELHORAMENTOS'],
  ['MTIG4', ' - IGUAÇU'],
  ['MTRE3', ' - MITRE REALTY'],
  ['MTSA4', ' - METISA'],
  ['MULT3', ' - Multiplan'],
  ['MWET4', ' - WETZEL S.A.'],
  ['MYPK3', ' - IOCHPE-MAXION'],
  ['NAFG4', ' - NADIR FIGUEIREDO'],
  ['NAFG3', ' - NADIR FIGUEIREDO'],
  ['NEOE3', ' - NEOENERGIA'],
  ['NORD3', ' - NORDON INDS METALURGICAS SA'],
  ['NTCO3', ' - GRUPO NATURA'],
  ['NUTR3', ' - NUTRIPLANT'],
  ['ODPV3', ' - ODONTOPREV'],
  ['OFSA3', ' - OUROFINO S/A'],
  ['OIBR3', ' - OI'],
  ['OIBR4', ' - OI'],
  ['OMGE3', ' - OMEGA GER'],
  ['OSXB3', ' - OSX BRASIL'],
  ['PARD3', ' - IHPARDINI'],
  ['PATI3', ' - PANATLANTICA'],
  ['PATI4', ' - PANATLANTICA'],
  ['PCAR3', ' - PÃO DE AÇÚCAR'],
  ['PCAR4', ' - PÃO DE AÇÚCAR'],
  ['PDGR3', ' - PDG REALT'],
  ['PEAB3', ' - CIA. DE PARTICIPAÇÕES ALIANÇA DA BAHIA'],
  ['PEAB4', ' - CIA. DE PARTICIPAÇÕES ALIANÇA DA BAHIA'],
  ['PETR4', ' - PETROBRAS'],
  ['PETR3', ' - PETROBRAS'],
  ['PFRM3', ' - PROFARMA'],
  ['PINE4', ' - Pine'],
  ['PLAS3', ' - PLASCAR PARTICIPAÇÕES INDUSTRIAIS S.A'],
  ['PMAM3', ' - PARANAPANEMA S.A.'],
  ['PNVL3', ' - PANVEL FARMÁCIAS'],
  ['PNVL4', ' - PANVEL FARMÁCIAS'],
  ['POMO4', ' - MARCOPOLO'],
  ['POMO3', ' - MARCOPOLO'],
  ['POSI3', ' - POSITIVO INF'],
  ['PRIO3', ' - PETRORIO'],
  ['PRNR3', ' - PRINER'],
  ['PSSA3', ' - PORTO SEGURO SA'],
  ['PTBL3', ' - PORTOBELLO S/A'],
  ['PTNT4', ' - PETTENATI'],
  ['PTNT3', ' - PETTENATI'],
  ['QUAL3', ' - QUALICORP'],
  ['RADL3', ' - RAIADROGASIL'],
  ['RAIL3', ' - ALL - AMÉRICA LATINA LOGÍSTICA S/A'],
  ['RANI3', ' - CELULOSE IRANI'],
  ['RANI4', ' - CELULOSE IRANI'],
  ['RAPT4', ' - RANDON S.A. IMPLEMENTOS E PARTICIPAÇÕES'],
  ['RAPT3', ' - RANDON S.A. IMPLEMENTOS E PARTICIPAÇÕES'],
  ['RCSL4', ' - RECRUSUL'],
  ['RDNI3', ' - RODOBENSIMOB'],
  ['REDE3', ' - REDE EMPRESAS DE ENERGIA ELÉTRICA S.A.'],
  ['RENT3', ' - LOCALIZA RENT A CAR'],
  ['RLOG3', ' - COSAN LOG'],
  ['RNEW11', ' - RENOVA'],
  ['RNEW4', ' - RENOVA'],
  ['RNEW3', ' - RENOVA'],
  ['ROMI3', ' - ROMI'],
  ['RPAD3', ' - ALFA HOLDINGS'],
  ['RPAD5', ' - ALFA HOLDINGS'],
  ['RPAD6', ' - ALFA HOLDINGS'],
  ['RPMG3', ' - REFINARIA DE PETRÓLEOS DE MANGUINHOS S.A'],
  ['RSID3', ' - ROSSI RESIDENCIAL'],
  ['RSUL4', ' - METALURGICA RIOSULENSE S/A'],
  ['SANB11', ' - SANTANDER'],
  ['SANB4', ' - SANTANDER'],
  ['SANB3', ' - SANTANDER'],
  ['SAPR11', ' - SANEPAR'],
  ['SAPR4', ' - SANEPAR'],
  ['SAPR3', ' - SANEPAR'],
  ['SBSP3', ' - SABESP'],
  ['SCAR3', ' - SÃO CARLOS EMPREEND.E PARTICIPAÇÕES S.A.'],
  ['SEER3', ' - SER EDUCA'],
  ['SGPS3', ' - Springs'],
  ['SHOW3', ' - TIME FOR FUN'],
  ['SHUL4', ' - SCHULZ'],
  ['SLCE3', ' - SLC Agricola'],
  ['SLED4', ' - EDITORA SARAIVA'],
  ['SLED3', ' - EDITORA SARAIVA'],
  ['SMLS3', ' - SMILES'],
  ['SMTO3', ' - SAO MARTINHO'],
  ['SNSY5', ' - SANSUY S.A. INDÚSTRIA DE PLÁSTICOS'],
  ['SOND6', ' - SONDOTECNICA S/A.'],
  ['SOND5', ' - SONDOTECNICA S/A.'],
  ['SPRI3', ' - SPRINGER'],
  ['SPRI5', ' - SPRINGER'],
  ['SPRI6', ' - SPRINGER'],
  ['SQIA3', ' - SINQIA'],
  ['STBP3', ' - SBPAR'],
  ['SULA11', ' - Sul America'],
  ['SULA4', ' - Sul America'],
  ['SULA3', ' - Sul America'],
  ['SUZB3', ' - Suzano Papel'],
  ['TAEE11', ' - TAESA'],
  ['TAEE4', ' - TAESA'],
  ['TAEE3', ' - TAESA'],
  ['TASA4', ' - TAURUS ARMAS'],
  ['TASA3', ' - TAURUS ARMAS'],
  ['TCNO4', ' - TECNOSOLO S/A'],
  ['TCNO3', ' - TECNOSOLO S/A'],
  ['TCSA3', ' - TECNISA'],
  ['TECN3', ' - TECHNOS'],
  ['TEKA4', ' - TEKA S.A.'],
  ['TEKA3', ' - TEKA S.A.'],
  ['TELB4', ' - TELEBRAS'],
  ['TELB3', ' - TELEBRAS'],
  ['TEND3', ' - Tenda'],
  ['TESA3', ' - TERRA SANTA'],
  ['TGMA3', ' - Tegma'],
  ['TIET11', ' - AES TIETE E'],
  ['TIET4', ' - AES TIETE E'],
  ['TIET3', ' - AES TIETE E'],
  ['TIMP3', ' - TIM PARTICIPAÇÕES S.A.'],
  ['TKNO4', ' - TEKNO'],
  ['TOTS3', ' - TOTVS'],
  ['TPIS3', ' - TRIUNFO PARTICIPACOES SA'],
  ['TRIS3', ' - Trisul'],
  ['TRPL4', ' - TRANSMISSÃO PAULISTA'],
  ['TRPL3', ' - TRANSMISSÃO PAULISTA'],
  ['TUPY3', ' - TUPY'],
  ['TXRX4', ' - RENAUX'],
  ['TXRX3', ' - RENAUX'],
  ['UCAS3', ' - UNICASA'],
  ['UGPA3', ' - ULTRAPAR PARTICIPAÇÕES SA'],
  ['UNIP6', ' - UNIPAR PARTICIPAÇÕES S.A.'],
  ['UNIP3', ' - UNIPAR PARTICIPAÇÕES S.A.'],
  ['UNIP5', ' - UNIPAR PARTICIPAÇÕES S.A.'],
  ['USIM5', ' - USIMINAS'],
  ['USIM3', ' - USIMINAS'],
  ['USIM6', ' - USIMINAS'],
  ['VALE3', ' - VALE'],
  ['VIVA3', ' - VIVARA S.A.'],
  ['VIVR3', ' - VIVER'],
  ['VIVT4', ' - TELEF BRASIL'],
  ['VIVT3', ' - TELEF BRASIL'],
  ['VLID3', ' - VALID'],
  ['VULC3', ' - VULCABRAS S/A.'],
  ['VVAR3', ' - VIAVAREJO'],
  ['WEGE3', ' - WEG SA'],
  ['WHRL4', ' - WHIRLPOOL S.A.'],
  ['WHRL3', ' - WHIRLPOOL S.A.'],
  ['WIZS3', ' - WIZ S.A.'],
  ['WLMM4', ' - WLM'],
  ['WLMM3', ' - WLM'],
  ['WSON33', ' - Wilson Sons'],
  ['YDUQ3', ' - YDUQS PART']
];