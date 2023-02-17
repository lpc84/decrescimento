declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"members": {
"alcides.md": {
  id: "alcides.md",
  slug: "alcides",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"guiser.md": {
  id: "guiser.md",
  slug: "guiser",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
},
"posts": {
"08-05-2121-caminhada-monsanto.md": {
  id: "08-05-2121-caminhada-monsanto.md",
  slug: "08-05-2121-caminhada-monsanto",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-campanha-eleitoral-perdida-no-labirinto-das-propostas-habituais.md": {
  id: "a-campanha-eleitoral-perdida-no-labirinto-das-propostas-habituais.md",
  slug: "a-campanha-eleitoral-perdida-no-labirinto-das-propostas-habituais",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-duplicacao-final.md": {
  id: "a-duplicacao-final.md",
  slug: "a-duplicacao-final",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-ganhar-se-perde-e-a-perder-se-ganha-as-questoes-tabu-sobre-o-aumento-da-capacidade-aeroportuaria-em-portugal.md": {
  id: "a-ganhar-se-perde-e-a-perder-se-ganha-as-questoes-tabu-sobre-o-aumento-da-capacidade-aeroportuaria-em-portugal.md",
  slug: "a-ganhar-se-perde-e-a-perder-se-ganha-as-questoes-tabu-sobre-o-aumento-da-capacidade-aeroportuaria-em-portugal",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-importancia-de-hortas-comunitarias-no-contexto-urbano.md": {
  id: "a-importancia-de-hortas-comunitarias-no-contexto-urbano.md",
  slug: "a-importancia-de-hortas-comunitarias-no-contexto-urbano",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-rede-dc-nos-media.md": {
  id: "a-rede-dc-nos-media.md",
  slug: "a-rede-dc-nos-media",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-relevancia-do-decrescimento-para-reflectir-sobre-a-pandemia-da-covid-19.md": {
  id: "a-relevancia-do-decrescimento-para-reflectir-sobre-a-pandemia-da-covid-19.md",
  slug: "a-relevancia-do-decrescimento-para-reflectir-sobre-a-pandemia-da-covid-19",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-sabedoria-do-caracol.md": {
  id: "a-sabedoria-do-caracol.md",
  slug: "a-sabedoria-do-caracol",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-shell-e-o-ativismo-ambiental-pescadinha-de-rabo-na-boca.md": {
  id: "a-shell-e-o-ativismo-ambiental-pescadinha-de-rabo-na-boca.md",
  slug: "a-shell-e-o-ativismo-ambiental-pescadinha-de-rabo-na-boca",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-tirania-da-maioria.md": {
  id: "a-tirania-da-maioria.md",
  slug: "a-tirania-da-maioria",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"a-vereda-rede-para-o-decrescimento-contributos-para-uma-reflexao.md": {
  id: "a-vereda-rede-para-o-decrescimento-contributos-para-uma-reflexao.md",
  slug: "a-vereda-rede-para-o-decrescimento-contributos-para-uma-reflexao",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"acordai.md": {
  id: "acordai.md",
  slug: "acordai",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"as-espadas-e-a-parede.md": {
  id: "as-espadas-e-a-parede.md",
  slug: "as-espadas-e-a-parede",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"biblioteca.md": {
  id: "biblioteca.md",
  slug: "biblioteca",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"boletim-do-decrescimento-1.md": {
  id: "boletim-do-decrescimento-1.md",
  slug: "boletim-do-decrescimento-1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"caracol-dezembro-2022.md": {
  id: "caracol-dezembro-2022.md",
  slug: "caracol-dezembro-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"carta-aberta-degrowth-new-roots-for-the-economy-re-imagining-the-future-after-the-corona-crisis.md": {
  id: "carta-aberta-degrowth-new-roots-for-the-economy-re-imagining-the-future-after-the-corona-crisis.md",
  slug: "carta-aberta-degrowth-new-roots-for-the-economy-re-imagining-the-future-after-the-corona-crisis",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"conversas-decrescentistas-1-economia-a-falacia-do-crescimento.md": {
  id: "conversas-decrescentistas-1-economia-a-falacia-do-crescimento.md",
  slug: "conversas-decrescentistas-1-economia-a-falacia-do-crescimento",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"conversas-decrescentistas-2-fluxos-o-filme-acelerado-de-tudo.md": {
  id: "conversas-decrescentistas-2-fluxos-o-filme-acelerado-de-tudo.md",
  slug: "conversas-decrescentistas-2-fluxos-o-filme-acelerado-de-tudo",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"crescer-ate-rebentar-50-anos-dos-limites-ao-crescimento.md": {
  id: "crescer-ate-rebentar-50-anos-dos-limites-ao-crescimento.md",
  slug: "crescer-ate-rebentar-50-anos-dos-limites-ao-crescimento",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"crescer-ate-rebentar-decrscimento-cuidados-saude.md": {
  id: "crescer-ate-rebentar-decrscimento-cuidados-saude.md",
  slug: "crescer-ate-rebentar-decrscimento-cuidados-saude",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"crescer-ate-rebentar-os-limites-ao-crescimento-a-crise-ecologica.md": {
  id: "crescer-ate-rebentar-os-limites-ao-crescimento-a-crise-ecologica.md",
  slug: "crescer-ate-rebentar-os-limites-ao-crescimento-a-crise-ecologica",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"crescer-ate-rebentar-territorios.md": {
  id: "crescer-ate-rebentar-territorios.md",
  slug: "crescer-ate-rebentar-territorios",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"crescer-ate-rebentar-videos-das-6-primeiras-sessoes.md": {
  id: "crescer-ate-rebentar-videos-das-6-primeiras-sessoes.md",
  slug: "crescer-ate-rebentar-videos-das-6-primeiras-sessoes",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"cuidar-de-nos-cuidar-da-vida.md": {
  id: "cuidar-de-nos-cuidar-da-vida.md",
  slug: "cuidar-de-nos-cuidar-da-vida",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"declaracao-de-dependencia-alvaro.md": {
  id: "declaracao-de-dependencia-alvaro.md",
  slug: "declaracao-de-dependencia-alvaro",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"declaracao-dependencia-ana-pocas.md": {
  id: "declaracao-dependencia-ana-pocas.md",
  slug: "declaracao-dependencia-ana-pocas",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"decrescimento-democracia.md": {
  id: "decrescimento-democracia.md",
  slug: "decrescimento-democracia",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"decrescimento-em-tempos-de-pandemia-da-covid-19.md": {
  id: "decrescimento-em-tempos-de-pandemia-da-covid-19.md",
  slug: "decrescimento-em-tempos-de-pandemia-da-covid-19",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"decrescimento-saude-e-cuidados.md": {
  id: "decrescimento-saude-e-cuidados.md",
  slug: "decrescimento-saude-e-cuidados",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"dia-global-do-decrescimento-4-junho.md": {
  id: "dia-global-do-decrescimento-4-junho.md",
  slug: "dia-global-do-decrescimento-4-junho",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"dias-do-decrescimento-videos-e-podcasts-das-sessoes.md": {
  id: "dias-do-decrescimento-videos-e-podcasts-das-sessoes.md",
  slug: "dias-do-decrescimento-videos-e-podcasts-das-sessoes",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"e-quem-se-lixa-e-o-mexilhao.md": {
  id: "e-quem-se-lixa-e-o-mexilhao.md",
  slug: "e-quem-se-lixa-e-o-mexilhao",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"eleicoes-autarquicas-opcoes-e-propostas-decrescentistas.md": {
  id: "eleicoes-autarquicas-opcoes-e-propostas-decrescentistas.md",
  slug: "eleicoes-autarquicas-opcoes-e-propostas-decrescentistas",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"encontro-nacional-2022.md": {
  id: "encontro-nacional-2022.md",
  slug: "encontro-nacional-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"entre-orcamento-do-estado-e-covid-19-ainda-cabe-mais-alguma-coisa.md": {
  id: "entre-orcamento-do-estado-e-covid-19-ainda-cabe-mais-alguma-coisa.md",
  slug: "entre-orcamento-do-estado-e-covid-19-ainda-cabe-mais-alguma-coisa",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"eventos-passados.md": {
  id: "eventos-passados.md",
  slug: "eventos-passados",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"eventos.md": {
  id: "eventos.md",
  slug: "eventos",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"evitar-a-catastrofe-climatica-e-proteger-a-saude-da-populacao.md": {
  id: "evitar-a-catastrofe-climatica-e-proteger-a-saude-da-populacao.md",
  slug: "evitar-a-catastrofe-climatica-e-proteger-a-saude-da-populacao",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"lisboa-assembleia-cidada-para-o-clima.md": {
  id: "lisboa-assembleia-cidada-para-o-clima.md",
  slug: "lisboa-assembleia-cidada-para-o-clima",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"manifesto.md": {
  id: "manifesto.md",
  slug: "manifesto",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"membros.md": {
  id: "membros.md",
  slug: "membros",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mobilidade-justa-viajar-com-os-pes-na-terra.md": {
  id: "mobilidade-justa-viajar-com-os-pes-na-terra.md",
  slug: "mobilidade-justa-viajar-com-os-pes-na-terra",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"mobilizacao-mundial-pela-justica-climatica-nov2021.md": {
  id: "mobilizacao-mundial-pela-justica-climatica-nov2021.md",
  slug: "mobilizacao-mundial-pela-justica-climatica-nov2021",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"nao-tenhamos-ilusoes-quanto-ao-capitalismo-verde-precisamos-de-uma-visao-de-decrescimento.md": {
  id: "nao-tenhamos-ilusoes-quanto-ao-capitalismo-verde-precisamos-de-uma-visao-de-decrescimento.md",
  slug: "nao-tenhamos-ilusoes-quanto-ao-capitalismo-verde-precisamos-de-uma-visao-de-decrescimento",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"natureza-de-boutique.md": {
  id: "natureza-de-boutique.md",
  slug: "natureza-de-boutique",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"novo-pacto-verde-solucao-milagrosa-para-todos-os-males.md": {
  id: "novo-pacto-verde-solucao-milagrosa-para-todos-os-males.md",
  slug: "novo-pacto-verde-solucao-milagrosa-para-todos-os-males",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"nucleo-de-lisboa.md": {
  id: "nucleo-de-lisboa.md",
  slug: "nucleo-de-lisboa",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-dezembro.md": {
  id: "o-caracol-dezembro.md",
  slug: "o-caracol-dezembro",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-julho-2021.md": {
  id: "o-caracol-julho-2021.md",
  slug: "o-caracol-julho-2021",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-maio-2021-2.md": {
  id: "o-caracol-maio-2021-2.md",
  slug: "o-caracol-maio-2021-2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-novembro-2021.md": {
  id: "o-caracol-novembro-2021.md",
  slug: "o-caracol-novembro-2021",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-primavera-2022.md": {
  id: "o-caracol-primavera-2022.md",
  slug: "o-caracol-primavera-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-rentree-2022.md": {
  id: "o-caracol-rentree-2022.md",
  slug: "o-caracol-rentree-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-setembro-2021.md": {
  id: "o-caracol-setembro-2021.md",
  slug: "o-caracol-setembro-2021",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-caracol-verao-2022.md": {
  id: "o-caracol-verao-2022.md",
  slug: "o-caracol-verao-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-medo-ao-servico-do-crescimento-economico.md": {
  id: "o-medo-ao-servico-do-crescimento-economico.md",
  slug: "o-medo-ao-servico-do-crescimento-economico",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-papel-do-movimento-decrescentista-na-criacao-de-uma-matriz-de-alternativas-para-a-transformacao-social.md": {
  id: "o-papel-do-movimento-decrescentista-na-criacao-de-uma-matriz-de-alternativas-para-a-transformacao-social.md",
  slug: "o-papel-do-movimento-decrescentista-na-criacao-de-uma-matriz-de-alternativas-para-a-transformacao-social",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-plano-de-recuperacao-e-resiliencia-da-pseudo-consulta-publica-a-falta-de-coragem-para-imaginar-um-futuro-diferente.md": {
  id: "o-plano-de-recuperacao-e-resiliencia-da-pseudo-consulta-publica-a-falta-de-coragem-para-imaginar-um-futuro-diferente.md",
  slug: "o-plano-de-recuperacao-e-resiliencia-da-pseudo-consulta-publica-a-falta-de-coragem-para-imaginar-um-futuro-diferente",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"o-que-e-o-decrescimento.md": {
  id: "o-que-e-o-decrescimento.md",
  slug: "o-que-e-o-decrescimento",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"parecer-as-leis-de-base-do-clima.md": {
  id: "parecer-as-leis-de-base-do-clima.md",
  slug: "parecer-as-leis-de-base-do-clima",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"poema-decrescentista.md": {
  id: "poema-decrescentista.md",
  slug: "poema-decrescentista",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"reconciliar-economia-e-ecologia-condicao-necessaria-para-um-futuro-sustentavel.md": {
  id: "reconciliar-economia-e-ecologia-condicao-necessaria-para-um-futuro-sustentavel.md",
  slug: "reconciliar-economia-e-ecologia-condicao-necessaria-para-um-futuro-sustentavel",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"recursos.md": {
  id: "recursos.md",
  slug: "recursos",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"rendimento-de-cuidado.md": {
  id: "rendimento-de-cuidado.md",
  slug: "rendimento-de-cuidado",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"sessao-de-acolhimento-01-marco.md": {
  id: "sessao-de-acolhimento-01-marco.md",
  slug: "sessao-de-acolhimento-01-marco",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"sobre-nos.md": {
  id: "sobre-nos.md",
  slug: "sobre-nos",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"um-ministro-do-ambiente-que-nao-entende-o-problema-do-litio-devia-ser-ministro-do-ambiente.md": {
  id: "um-ministro-do-ambiente-que-nao-entende-o-problema-do-litio-devia-ser-ministro-do-ambiente.md",
  slug: "um-ministro-do-ambiente-que-nao-entende-o-problema-do-litio-devia-ser-ministro-do-ambiente",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"uma-bibliografia-introdutoria.md": {
  id: "uma-bibliografia-introdutoria.md",
  slug: "uma-bibliografia-introdutoria",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"vamos-passar-a-ser-serios-em-relacao-ao-futuro-da-aviacao.md": {
  id: "vamos-passar-a-ser-serios-em-relacao-ao-futuro-da-aviacao.md",
  slug: "vamos-passar-a-ser-serios-em-relacao-ao-futuro-da-aviacao",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"videos.md": {
  id: "videos.md",
  slug: "videos",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"visao-critica-dos-acordos-da-cop26.md": {
  id: "visao-critica-dos-acordos-da-cop26.md",
  slug: "visao-critica-dos-acordos-da-cop26",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"visao-decrescentista-sobre-as-contestacoes-internacionais-pelo-clima-2.md": {
  id: "visao-decrescentista-sobre-as-contestacoes-internacionais-pelo-clima-2.md",
  slug: "visao-decrescentista-sobre-as-contestacoes-internacionais-pelo-clima-2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"visao-decrescentista-sobre-as-contestacoes-internacionais-pelo-clima.md": {
  id: "visao-decrescentista-sobre-as-contestacoes-internacionais-pelo-clima.md",
  slug: "visao-decrescentista-sobre-as-contestacoes-internacionais-pelo-clima",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
