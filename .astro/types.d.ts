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
"2021-05-23-um-ministro-do-ambiente-que-nao-entende-o-problema-do-litio-devia-ser-ministro-do-ambiente.md": {
  id: "2021-05-23-um-ministro-do-ambiente-que-nao-entende-o-problema-do-litio-devia-ser-ministro-do-ambiente.md",
  slug: "um-ministro-do-ambiente-que-nao-entende-o-problema-do-litio-devia-ser-ministro-do-ambiente",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2022-06-25-o-caracol-verao-2022.md": {
  id: "2022-06-25-o-caracol-verao-2022.md",
  slug: "o-caracol-verao-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2022-08-04-crescer-ate-rebentar-videos-das-6-primeiras-sessoes.md": {
  id: "2022-08-04-crescer-ate-rebentar-videos-das-6-primeiras-sessoes.md",
  slug: "crescer-ate-rebentar-videos-das-6-primeiras-sessoes",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2022-09-08-a-vereda-rede-para-o-decrescimento-contributos-para-uma-reflexao.md": {
  id: "2022-09-08-a-vereda-rede-para-o-decrescimento-contributos-para-uma-reflexao.md",
  slug: "a-vereda-rede-para-o-decrescimento-contributos-para-uma-reflexao",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"2022-09-09-o-caracol-rentree-2022.md": {
  id: "2022-09-09-o-caracol-rentree-2022.md",
  slug: "o-caracol-rentree-2022",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
