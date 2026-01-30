declare module 'astro:content' {
	export interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export type ReferenceDataEntry<
		C extends CollectionKey,
		E extends keyof DataEntryMap[C] = string,
	> = {
		collection: C;
		id: E;
	};
	export type ReferenceContentEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}) = string,
	> = {
		collection: C;
		slug: E;
	};
	export type ReferenceLiveEntry<C extends keyof LiveContentConfig['collections']> = {
		collection: C;
		id: string;
	};

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getLiveCollection<C extends keyof LiveContentConfig['collections']>(
		collection: C,
		filter?: LiveLoaderCollectionFilterType<C>,
	): Promise<
		import('astro').LiveDataCollectionResult<LiveLoaderDataType<C>, LiveLoaderErrorType<C>>
	>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		entry: ReferenceContentEntry<C, E>,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		entry: ReferenceDataEntry<C, E>,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? string extends keyof DataEntryMap[C]
			? Promise<DataEntryMap[C][E]> | undefined
			: Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getLiveEntry<C extends keyof LiveContentConfig['collections']>(
		collection: C,
		filter: string | LiveLoaderEntryFilterType<C>,
	): Promise<import('astro').LiveDataEntryResult<LiveLoaderDataType<C>, LiveLoaderErrorType<C>>>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: ReferenceContentEntry<C, ValidContentEntrySlug<C>>[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: ReferenceDataEntry<C, keyof DataEntryMap[C]>[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? ReferenceContentEntry<C, ValidContentEntrySlug<C>>
			: ReferenceDataEntry<C, keyof DataEntryMap[C]>
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"adobe-legt-nach-cs55-fuer-kreative-koepfe.md": {
	id: "adobe-legt-nach-cs55-fuer-kreative-koepfe.md";
  slug: "adobe-legt-nach-cs55-fuer-kreative-koepfe";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"amazon-startet-neuen-bezahldienst-a-la-paypal.md": {
	id: "amazon-startet-neuen-bezahldienst-a-la-paypal.md";
  slug: "amazon-startet-neuen-bezahldienst-a-la-paypal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"anonymitaet-im-internet-muss-abgeschafft-werden.md": {
	id: "anonymitaet-im-internet-muss-abgeschafft-werden.md";
  slug: "anonymitaet-im-internet-muss-abgeschafft-werden";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"apple-fernseher-geruecht-um-tim-cooks-erstes-produkt.md": {
	id: "apple-fernseher-geruecht-um-tim-cooks-erstes-produkt.md";
  slug: "apple-fernseher-geruecht-um-tim-cooks-erstes-produkt";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bing-maps-streetside-kameraautos-fahren-ab-mai-2011.md": {
	id: "bing-maps-streetside-kameraautos-fahren-ab-mai-2011.md";
  slug: "bing-maps-streetside-kameraautos-fahren-ab-mai-2011";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blackberry-simulator-ein-abenteuer-auf-das-jeder-verzichten-sollte.md": {
	id: "blackberry-simulator-ein-abenteuer-auf-das-jeder-verzichten-sollte.md";
  slug: "blackberry-simulator-ein-abenteuer-auf-das-jeder-verzichten-sollte";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"codewars-eine-schoene-neue-code-webseite-fuer-javascriptcoffeescript-und-ruby-entwickler.md": {
	id: "codewars-eine-schoene-neue-code-webseite-fuer-javascriptcoffeescript-und-ruby-entwickler.md";
  slug: "codewars-eine-schoene-neue-code-webseite-fuer-javascriptcoffeescript-und-ruby-entwickler";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cornerstone-multitasking-auf-android-geraeten-hp-touchpad-ein-hauch-von-windows-8.md": {
	id: "cornerstone-multitasking-auf-android-geraeten-hp-touchpad-ein-hauch-von-windows-8.md";
  slug: "cornerstone-multitasking-auf-android-geraeten-hp-touchpad-ein-hauch-von-windows-8";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"der-commodore-64-ist-zurueck.md": {
	id: "der-commodore-64-ist-zurueck.md";
  slug: "der-commodore-64-ist-zurueck";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"die-rueckseite-von-webseiten.md": {
	id: "die-rueckseite-von-webseiten.md";
  slug: "die-rueckseite-von-webseiten";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"erstes-android-auf-dem-hp-touchpad-verfuegbar-emulator.md": {
	id: "erstes-android-auf-dem-hp-touchpad-verfuegbar-emulator.md";
  slug: "erstes-android-auf-dem-hp-touchpad-verfuegbar-emulator";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"erziehungssteuer-fuer-internet-explorer-7-nutzer.md": {
	id: "erziehungssteuer-fuer-internet-explorer-7-nutzer.md";
  slug: "erziehungssteuer-fuer-internet-explorer-7-nutzer";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"firefox-5-schon-am-21-juni.md": {
	id: "firefox-5-schon-am-21-juni.md";
  slug: "firefox-5-schon-am-21-juni";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"google-kuendigt-chromebooks-an.md": {
	id: "google-kuendigt-chromebooks-an.md";
  slug: "google-kuendigt-chromebooks-an";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"google-muss-500-millionen-dollar-zahlen-fuer-illegale-werbung.md": {
	id: "google-muss-500-millionen-dollar-zahlen-fuer-illegale-werbung.md";
  slug: "google-muss-500-millionen-dollar-zahlen-fuer-illegale-werbung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"google-stellt-search-by-image-via-dragn-drop-vor.md": {
	id: "google-stellt-search-by-image-via-dragn-drop-vor.md";
  slug: "google-stellt-search-by-image-via-dragn-drop-vor";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"google-will-erneuerbare-energien-in-brandenburg-unterstuetzen.md": {
	id: "google-will-erneuerbare-energien-in-brandenburg-unterstuetzen.md";
  slug: "google-will-erneuerbare-energien-in-brandenburg-unterstuetzen";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hacker-planen-facebook-lahmzulegen.md": {
	id: "hacker-planen-facebook-lahmzulegen.md";
  slug: "hacker-planen-facebook-lahmzulegen";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hp-touchpad-wird-immer-gruener-android-update-04102011.md": {
	id: "hp-touchpad-wird-immer-gruener-android-update-04102011.md";
  slug: "hp-touchpad-wird-immer-gruener-android-update-04102011";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hp-touchpad-wird-immer-gruener-android-update-13102011.md": {
	id: "hp-touchpad-wird-immer-gruener-android-update-13102011.md";
  slug: "hp-touchpad-wird-immer-gruener-android-update-13102011";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hp-touchpad-wird-immer-gruener-android-update-20092011.md": {
	id: "hp-touchpad-wird-immer-gruener-android-update-20092011.md";
  slug: "hp-touchpad-wird-immer-gruener-android-update-20092011";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hp-touchpad-wird-immer-gruener-android.md": {
	id: "hp-touchpad-wird-immer-gruener-android.md";
  slug: "hp-touchpad-wird-immer-gruener-android";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"idc-windows-phone-uebertrifft-2016-den-marktanteil-von-ios.md": {
	id: "idc-windows-phone-uebertrifft-2016-den-marktanteil-von-ios.md";
  slug: "idc-windows-phone-uebertrifft-2016-den-marktanteil-von-ios";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"in-arbeit-wordpress-bootstrap-3-theme-mit-funktionen-als-widgets-und-shortcuts.md": {
	id: "in-arbeit-wordpress-bootstrap-3-theme-mit-funktionen-als-widgets-und-shortcuts.md";
  slug: "in-arbeit-wordpress-bootstrap-3-theme-mit-funktionen-als-widgets-und-shortcuts";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"iphone-5-8-megapixel-kamera-von-sony.md": {
	id: "iphone-5-8-megapixel-kamera-von-sony.md";
  slug: "iphone-5-8-megapixel-kamera-von-sony";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"iphone-und-ps3-hacker-geohot-arbeitet-nun-bei-facebook.md": {
	id: "iphone-und-ps3-hacker-geohot-arbeitet-nun-bei-facebook.md";
  slug: "iphone-und-ps3-hacker-geohot-arbeitet-nun-bei-facebook";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"microsofts-surface-pro-kommt-erst-im-februar.md": {
	id: "microsofts-surface-pro-kommt-erst-im-februar.md";
  slug: "microsofts-surface-pro-kommt-erst-im-februar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"neue-nintendo-wii-konsole-erst-2012.md": {
	id: "neue-nintendo-wii-konsole-erst-2012.md";
  slug: "neue-nintendo-wii-konsole-erst-2012";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"neues-design-neues-leben.md": {
	id: "neues-design-neues-leben.md";
  slug: "neues-design-neues-leben";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"neues-macbook-pro-nur-schwer-reparier-erweiterbar.md": {
	id: "neues-macbook-pro-nur-schwer-reparier-erweiterbar.md";
  slug: "neues-macbook-pro-nur-schwer-reparier-erweiterbar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"nintendo-stellt-seine-neue-konsole-wii-u-auf-der-e3-vor.md": {
	id: "nintendo-stellt-seine-neue-konsole-wii-u-auf-der-e3-vor.md";
  slug: "nintendo-stellt-seine-neue-konsole-wii-u-auf-der-e3-vor";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"omnitouch-microsoft-zeigt-dass-alles-ein-touchscreen-werden-kann.md": {
	id: "omnitouch-microsoft-zeigt-dass-alles-ein-touchscreen-werden-kann.md";
  slug: "omnitouch-microsoft-zeigt-dass-alles-ein-touchscreen-werden-kann";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"ouya-android-konsolen-projekt-sprengt-kickstarter-rekord.md": {
	id: "ouya-android-konsolen-projekt-sprengt-kickstarter-rekord.md";
  slug: "ouya-android-konsolen-projekt-sprengt-kickstarter-rekord";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"ouya-die-erste-auf-androidbasierte-spielkonsole-steht-kurz-vor-der-auslieferung.md": {
	id: "ouya-die-erste-auf-androidbasierte-spielkonsole-steht-kurz-vor-der-auslieferung.md";
  slug: "ouya-die-erste-auf-androidbasierte-spielkonsole-steht-kurz-vor-der-auslieferung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"page-speed-service-freundliche-uebernahme-von-google.md": {
	id: "page-speed-service-freundliche-uebernahme-von-google.md";
  slug: "page-speed-service-freundliche-uebernahme-von-google";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"panda-update-googles-verbessert-suchqualitaet-auch-in-deutschland.md": {
	id: "panda-update-googles-verbessert-suchqualitaet-auch-in-deutschland.md";
  slug: "panda-update-googles-verbessert-suchqualitaet-auch-in-deutschland";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"printgestaltung-in-24-stunden-mit-oaf-instant-aus-goettingen.md": {
	id: "printgestaltung-in-24-stunden-mit-oaf-instant-aus-goettingen.md";
  slug: "printgestaltung-in-24-stunden-mit-oaf-instant-aus-goettingen";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"randi-zuckerberg-verlaesst-facebook.md": {
	id: "randi-zuckerberg-verlaesst-facebook.md";
  slug: "randi-zuckerberg-verlaesst-facebook";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"samsung-galaxy-s2-vs-iphone-4.md": {
	id: "samsung-galaxy-s2-vs-iphone-4.md";
  slug: "samsung-galaxy-s2-vs-iphone-4";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"steve-gibt-kurzes-statement-zum-location-tracking-des-iphones-und-des-ipads.md": {
	id: "steve-gibt-kurzes-statement-zum-location-tracking-des-iphones-und-des-ipads.md";
  slug: "steve-gibt-kurzes-statement-zum-location-tracking-des-iphones-und-des-ipads";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"steve-jobs-ist-tot.md": {
	id: "steve-jobs-ist-tot.md";
  slug: "steve-jobs-ist-tot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"webdesign-der-superlative.md": {
	id: "webdesign-der-superlative.md";
  slug: "webdesign-der-superlative";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"weisses-iphone-4-ab-heute-verfuegbar.md": {
	id: "weisses-iphone-4-ab-heute-verfuegbar.md";
  slug: "weisses-iphone-4-ab-heute-verfuegbar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"weisses-iphone-4-noch-in-diesem-fruehjahr.md": {
	id: "weisses-iphone-4-noch-in-diesem-fruehjahr.md";
  slug: "weisses-iphone-4-noch-in-diesem-fruehjahr";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"wwdc-2011-wohl-keine-iphone-5-vorstellung.md": {
	id: "wwdc-2011-wohl-keine-iphone-5-vorstellung.md";
  slug: "wwdc-2011-wohl-keine-iphone-5-vorstellung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"xbox-720-dokument-im-internet-aufgetaucht.md": {
	id: "xbox-720-dokument-im-internet-aufgetaucht.md";
  slug: "xbox-720-dokument-im-internet-aufgetaucht";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"zwischenpruefung-2011-mediengestaltung.md": {
	id: "zwischenpruefung-2011-mediengestaltung.md";
  slug: "zwischenpruefung-2011-mediengestaltung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"playground": {
"css-login-mit-frosted-glass-effekt-hintergrund.md": {
	id: "css-login-mit-frosted-glass-effekt-hintergrund.md";
  slug: "css-login-mit-frosted-glass-effekt-hintergrund";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
"inhalte-einblenden-sobald-diese-im-sichtfeldviewport-sind.md": {
	id: "inhalte-einblenden-sobald-diese-im-sichtfeldviewport-sind.md";
  slug: "inhalte-einblenden-sobald-diese-im-sichtfeldviewport-sind";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
"material-design-ripple-effekt.md": {
	id: "material-design-ripple-effekt.md";
  slug: "material-design-ripple-effekt";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
"mobile-menue-button-animation.md": {
	id: "mobile-menue-button-animation.md";
  slug: "mobile-menue-button-animation";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
"portfolio-showcase-fuer-responsive-webdesigns.md": {
	id: "portfolio-showcase-fuer-responsive-webdesigns.md";
  slug: "portfolio-showcase-fuer-responsive-webdesigns";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
"rechtsklick-auf-logo-um-download-optionen-zu-oeffnen.md": {
	id: "rechtsklick-auf-logo-um-download-optionen-zu-oeffnen.md";
  slug: "rechtsklick-auf-logo-um-download-optionen-zu-oeffnen";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
"wordpress-freebie-wp-fancy-theme-fuer-fotografen-und-bildlastige-seiten.md": {
	id: "wordpress-freebie-wp-fancy-theme-fuer-fotografen-und-bildlastige-seiten.md";
  slug: "wordpress-freebie-wp-fancy-theme-fuer-fotografen-und-bildlastige-seiten";
  body: string;
  collection: "playground";
  data: any
} & { render(): Render[".md"] };
};
"portfolio": {
"altenheim-kylltalblick.md": {
	id: "altenheim-kylltalblick.md";
  slug: "altenheim-kylltalblick";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"blypo.md": {
	id: "blypo.md";
  slug: "blypo";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"bulliliebede.md": {
	id: "bulliliebede.md";
  slug: "bulliliebede";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"decide-forme.md": {
	id: "decide-forme.md";
  slug: "decide-forme";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"freiheitsliebecom.md": {
	id: "freiheitsliebecom.md";
  slug: "freiheitsliebecom";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"gartenvillen-oyten.md": {
	id: "gartenvillen-oyten.md";
  slug: "gartenvillen-oyten";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"headunit-revived.md": {
	id: "headunit-revived.md";
  slug: "headunit-revived";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"hochzeitshomepage-fuer-meine-hochzeit.md": {
	id: "hochzeitshomepage-fuer-meine-hochzeit.md";
  slug: "hochzeitshomepage-fuer-meine-hochzeit";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"hundeharmoniede.md": {
	id: "hundeharmoniede.md";
  slug: "hundeharmoniede";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"jucaplus-abschlusspruefung-2012.md": {
	id: "jucaplus-abschlusspruefung-2012.md";
  slug: "jucaplus-abschlusspruefung-2012";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"jugendserver-broksen.md": {
	id: "jugendserver-broksen.md";
  slug: "jugendserver-broksen";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"micanto-dein-eigener-streaming-dienst.md": {
	id: "micanto-dein-eigener-streaming-dienst.md";
  slug: "micanto-dein-eigener-streaming-dienst";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"neugraben-now.md": {
	id: "neugraben-now.md";
  slug: "neugraben-now";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"photobooth-web-application.md": {
	id: "photobooth-web-application.md";
  slug: "photobooth-web-application";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"rr-pflegedienst.md": {
	id: "rr-pflegedienst.md";
  slug: "rr-pflegedienst";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"seniorenzentrum-szb-bad-sassendorf-altenpflegeheim.md": {
	id: "seniorenzentrum-szb-bad-sassendorf-altenpflegeheim.md";
  slug: "seniorenzentrum-szb-bad-sassendorf-altenpflegeheim";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"simplelightboxcom.md": {
	id: "simplelightboxcom.md";
  slug: "simplelightboxcom";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"teamwordio.md": {
	id: "teamwordio.md";
  slug: "teamwordio";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"toolsandreknieriemde.md": {
	id: "toolsandreknieriemde.md";
  slug: "toolsandreknieriemde";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"typenhoch2de.md": {
	id: "typenhoch2de.md";
  slug: "typenhoch2de";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"wohn-pflege-gemeinschaft.md": {
	id: "wohn-pflege-gemeinschaft.md";
  slug: "wohn-pflege-gemeinschaft";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
"wortuhr-webapp-interface.md": {
	id: "wortuhr-webapp-interface.md";
  slug: "wortuhr-webapp-interface";
  body: string;
  collection: "portfolio";
  data: any
} & { render(): Render[".md"] };
};
"tutorials": {
"abstuerze-von-apps-seit-update-auf-ios-432.md": {
	id: "abstuerze-von-apps-seit-update-auf-ios-432.md";
  slug: "abstuerze-von-apps-seit-update-auf-ios-432";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"adresskoordinaten-mit-der-google-maps-api-3-und-jquery-bekommen.md": {
	id: "adresskoordinaten-mit-der-google-maps-api-3-und-jquery-bekommen.md";
  slug: "adresskoordinaten-mit-der-google-maps-api-3-und-jquery-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"alternative-zu-php-strip-tags.md": {
	id: "alternative-zu-php-strip-tags.md";
  slug: "alternative-zu-php-strip-tags";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"angularjs-jsonp-benutzen-und-fehler-vermeiden.md": {
	id: "angularjs-jsonp-benutzen-und-fehler-vermeiden.md";
  slug: "angularjs-jsonp-benutzen-und-fehler-vermeiden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"aptana-studio-3-key-exchange-error-beheben.md": {
	id: "aptana-studio-3-key-exchange-error-beheben.md";
  slug: "aptana-studio-3-key-exchange-error-beheben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"assembla-kostenloses-svn-repository-mit-deploy-funktion-einrichten.md": {
	id: "assembla-kostenloses-svn-repository-mit-deploy-funktion-einrichten.md";
  slug: "assembla-kostenloses-svn-repository-mit-deploy-funktion-einrichten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bildschirm-ausschalten-am-imac.md": {
	id: "bildschirm-ausschalten-am-imac.md";
  slug: "bildschirm-ausschalten-am-imac";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"boostrapcss-line-height-utility-classes.md": {
	id: "boostrapcss-line-height-utility-classes.md";
  slug: "boostrapcss-line-height-utility-classes";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-3-4-zeitverzoegertes-akkordeon-delayed-collapse-umsetzen.md": {
	id: "bootstrap-3-4-zeitverzoegertes-akkordeon-delayed-collapse-umsetzen.md";
  slug: "bootstrap-3-4-zeitverzoegertes-akkordeon-delayed-collapse-umsetzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-3-popover-schliessen-wenn-man-irgendwo-ausserhalb-hinklickt.md": {
	id: "bootstrap-3-popover-schliessen-wenn-man-irgendwo-ausserhalb-hinklickt.md";
  slug: "bootstrap-3-popover-schliessen-wenn-man-irgendwo-ausserhalb-hinklickt";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-4-javascript-fuer-file-input-mit-dateinamen.md": {
	id: "bootstrap-4-javascript-fuer-file-input-mit-dateinamen.md";
  slug: "bootstrap-4-javascript-fuer-file-input-mit-dateinamen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-blende-andere-popover-aus-sobald-ein-neuer-sich-oeffnet.md": {
	id: "bootstrap-blende-andere-popover-aus-sobald-ein-neuer-sich-oeffnet.md";
  slug: "bootstrap-blende-andere-popover-aus-sobald-ein-neuer-sich-oeffnet";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-carousel-mit-swipe-funktion.md": {
	id: "bootstrap-carousel-mit-swipe-funktion.md";
  slug: "bootstrap-carousel-mit-swipe-funktion";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-dropdowns-als-select-verwenden.md": {
	id: "bootstrap-dropdowns-als-select-verwenden.md";
  slug: "bootstrap-dropdowns-als-select-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-slide-geschwindigkeit-aendern.md": {
	id: "bootstrap-slide-geschwindigkeit-aendern.md";
  slug: "bootstrap-slide-geschwindigkeit-aendern";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap-youtube-video-im-modal-beim-schliessen-stoppen.md": {
	id: "bootstrap-youtube-video-im-modal-beim-schliessen-stoppen.md";
  slug: "bootstrap-youtube-video-im-modal-beim-schliessen-stoppen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"bootstrap3-mit-5-spalten-so-gehts.md": {
	id: "bootstrap3-mit-5-spalten-so-gehts.md";
  slug: "bootstrap3-mit-5-spalten-so-gehts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"cordova-links-zu-programmen-mailto-tel-etc-zulassen.md": {
	id: "cordova-links-zu-programmen-mailto-tel-etc-zulassen.md";
  slug: "cordova-links-zu-programmen-mailto-tel-etc-zulassen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"cordova-viewport-hoehe-bei-windowsphone-8-bug-beheben.md": {
	id: "cordova-viewport-hoehe-bei-windowsphone-8-bug-beheben.md";
  slug: "cordova-viewport-hoehe-bei-windowsphone-8-bug-beheben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"cordova-windows-phone-file-plugin-benutzbar-machen.md": {
	id: "cordova-windows-phone-file-plugin-benutzbar-machen.md";
  slug: "cordova-windows-phone-file-plugin-benutzbar-machen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-bildobjekt-mit-css-drehen-rotate-beim-hovern.md": {
	id: "css-bildobjekt-mit-css-drehen-rotate-beim-hovern.md";
  slug: "css-bildobjekt-mit-css-drehen-rotate-beim-hovern";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-dateien-zusammenfuehren-mit-php.md": {
	id: "css-dateien-zusammenfuehren-mit-php.md";
  slug: "css-dateien-zusammenfuehren-mit-php";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-ein-bild-vertikal-und-horizontal-in-einem-div-zentrieren.md": {
	id: "css-ein-bild-vertikal-und-horizontal-in-einem-div-zentrieren.md";
  slug: "css-ein-bild-vertikal-und-horizontal-in-einem-div-zentrieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-hacks-ie-8-ie7-und-ie6-direkt-ansprechen.md": {
	id: "css-hacks-ie-8-ie7-und-ie6-direkt-ansprechen.md";
  slug: "css-hacks-ie-8-ie7-und-ie6-direkt-ansprechen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-lerne-css-grids-in-5-minuten.md": {
	id: "css-lerne-css-grids-in-5-minuten.md";
  slug: "css-lerne-css-grids-in-5-minuten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-ordered-list-nummer-stylen-nur-mit-css.md": {
	id: "css-ordered-list-nummer-stylen-nur-mit-css.md";
  slug: "css-ordered-list-nummer-stylen-nur-mit-css";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-pures-css-star-rating-ohne-javascript.md": {
	id: "css-pures-css-star-rating-ohne-javascript.md";
  slug: "css-pures-css-star-rating-ohne-javascript";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-safari-border-radius-overflow-hidden-css-transform-fix.md": {
	id: "css-safari-border-radius-overflow-hidden-css-transform-fix.md";
  slug: "css-safari-border-radius-overflow-hidden-css-transform-fix";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-transition-hoehe-von-0-auf-auto-animieren-workaround.md": {
	id: "css-transition-hoehe-von-0-auf-auto-animieren-workaround.md";
  slug: "css-transition-hoehe-von-0-auf-auto-animieren-workaround";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"css-webseitefarben-an-das-farbschema-color-theme-anpassen-dark-mode-detection.md": {
	id: "css-webseitefarben-an-das-farbschema-color-theme-anpassen-dark-mode-detection.md";
  slug: "css-webseitefarben-an-das-farbschema-color-theme-anpassen-dark-mode-detection";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"datei-entpacken-unzip-mit-php.md": {
	id: "datei-entpacken-unzip-mit-php.md";
  slug: "datei-entpacken-unzip-mit-php";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"ddevdocker-redis-installieren-und-benutzen.md": {
	id: "ddevdocker-redis-installieren-und-benutzen.md";
  slug: "ddevdocker-redis-installieren-und-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"diy-ein-hausbett-fuer-kinder-selber-bauen-anleitung.md": {
	id: "diy-ein-hausbett-fuer-kinder-selber-bauen-anleitung.md";
  slug: "diy-ein-hausbett-fuer-kinder-selber-bauen-anleitung";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"diy-ein-stelzen-spielhaus-mit-rutsche-sandkasten-und-optionaler-schaukel-selber-bauen.md": {
	id: "diy-ein-stelzen-spielhaus-mit-rutsche-sandkasten-und-optionaler-schaukel-selber-bauen.md";
  slug: "diy-ein-stelzen-spielhaus-mit-rutsche-sandkasten-und-optionaler-schaukel-selber-bauen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"diy-wordclockwortuhr-selber-bauen-mit-arduino-wlan-neopixel.md": {
	id: "diy-wordclockwortuhr-selber-bauen-mit-arduino-wlan-neopixel.md";
  slug: "diy-wordclockwortuhr-selber-bauen-mit-arduino-wlan-neopixel";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"dns-cache-leeren-unter-mac-osx-und-windows.md": {
	id: "dns-cache-leeren-unter-mac-osx-und-windows.md";
  slug: "dns-cache-leeren-unter-mac-osx-und-windows";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"docker-ssh-in-docker-container.md": {
	id: "docker-ssh-in-docker-container.md";
  slug: "docker-ssh-in-docker-container";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"doppelte-spalten-loeschen-in-einer-mysql-datenbank-mit-php.md": {
	id: "doppelte-spalten-loeschen-in-einer-mysql-datenbank-mit-php.md";
  slug: "doppelte-spalten-loeschen-in-einer-mysql-datenbank-mit-php";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"ein-floatendes-element-mit-variabler-breite-mit-css-zentrieren.md": {
	id: "ein-floatendes-element-mit-variabler-breite-mit-css-zentrieren.md";
  slug: "ein-floatendes-element-mit-variabler-breite-mit-css-zentrieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"einen-weiterlesenread-more-link-bei-wordpress-the-excerpt-einfuegen.md": {
	id: "einen-weiterlesenread-more-link-bei-wordpress-the-excerpt-einfuegen.md";
  slug: "einen-weiterlesenread-more-link-bei-wordpress-the-excerpt-einfuegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"einfache-jquery-slideshow-mit-vor-und-zurueck-button.md": {
	id: "einfache-jquery-slideshow-mit-vor-und-zurueck-button.md";
  slug: "einfache-jquery-slideshow-mit-vor-und-zurueck-button";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"element-beim-scrollen-fixieren-mit-jquery.md": {
	id: "element-beim-scrollen-fixieren-mit-jquery.md";
  slug: "element-beim-scrollen-fixieren-mit-jquery";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"eltern-funktionen-im-kindtheme-child-theme-bei-wordpress-ueberschreiben.md": {
	id: "eltern-funktionen-im-kindtheme-child-theme-bei-wordpress-ueberschreiben.md";
  slug: "eltern-funktionen-im-kindtheme-child-theme-bei-wordpress-ueberschreiben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"entfernen-des-webkit-borders-beim-focus-in-ein-input-feld.md": {
	id: "entfernen-des-webkit-borders-beim-focus-in-ein-input-feld.md";
  slug: "entfernen-des-webkit-borders-beim-focus-in-ein-input-feld";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"facebook-fanboxlikebox-stylen-und-anpassen.md": {
	id: "facebook-fanboxlikebox-stylen-und-anpassen.md";
  slug: "facebook-fanboxlikebox-stylen-und-anpassen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"feld-leeren-x-button-beim-internet-explorer-10-ausblenden.md": {
	id: "feld-leeren-x-button-beim-internet-explorer-10-ausblenden.md";
  slug: "feld-leeren-x-button-beim-internet-explorer-10-ausblenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"foundation-5-und-ie8-oder-aelter.md": {
	id: "foundation-5-und-ie8-oder-aelter.md";
  slug: "foundation-5-und-ie8-oder-aelter";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"fuehrende-nullen-bei-csv-export-behalten.md": {
	id: "fuehrende-nullen-bei-csv-export-behalten.md";
  slug: "fuehrende-nullen-bei-csv-export-behalten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"git-bash-auf-windows-aliasse-hinzufuegen.md": {
	id: "git-bash-auf-windows-aliasse-hinzufuegen.md";
  slug: "git-bash-auf-windows-aliasse-hinzufuegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"git-dateiberechtigungsaenderungen-ignorieren-filemode-changes.md": {
	id: "git-dateiberechtigungsaenderungen-ignorieren-filemode-changes.md";
  slug: "git-dateiberechtigungsaenderungen-ignorieren-filemode-changes";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"git-nur-einzelne-dateien-pullen.md": {
	id: "git-nur-einzelne-dateien-pullen.md";
  slug: "git-nur-einzelne-dateien-pullen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"git-pull-erzwingen-force-lokale-dateien-zu-ueberschreiben.md": {
	id: "git-pull-erzwingen-force-lokale-dateien-zu-ueberschreiben.md";
  slug: "git-pull-erzwingen-force-lokale-dateien-zu-ueberschreiben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"git-repository-zuruecksetzen-und-alle-commits-loeschen.md": {
	id: "git-repository-zuruecksetzen-und-alle-commits-loeschen.md";
  slug: "git-repository-zuruecksetzen-und-alle-commits-loeschen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"gitcomposer-einen-bestimmten-commit-requiren.md": {
	id: "gitcomposer-einen-bestimmten-commit-requiren.md";
  slug: "gitcomposer-einen-bestimmten-commit-requiren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"google-chrome-adressleiste-fuer-android-50-l-einfaerben.md": {
	id: "google-chrome-adressleiste-fuer-android-50-l-einfaerben.md";
  slug: "google-chrome-adressleiste-fuer-android-50-l-einfaerben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"google-maps-wie-mache-ich-das-embedded-iframe-responsive.md": {
	id: "google-maps-wie-mache-ich-das-embedded-iframe-responsive.md";
  slug: "google-maps-wie-mache-ich-das-embedded-iframe-responsive";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"how-to-entferne-die-300ms-zeitverzoegerung-wenn-man-einen-link-in-jquery-mobile-anklickt.md": {
	id: "how-to-entferne-die-300ms-zeitverzoegerung-wenn-man-einen-link-in-jquery-mobile-anklickt.md";
  slug: "how-to-entferne-die-300ms-zeitverzoegerung-wenn-man-einen-link-in-jquery-mobile-anklickt";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"how-to-localstorage-benutzen.md": {
	id: "how-to-localstorage-benutzen.md";
  slug: "how-to-localstorage-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"howto-username-url039s-in-codeigniter.md": {
	id: "howto-username-url039s-in-codeigniter.md";
  slug: "howto-username-url039s-in-codeigniter";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"html-special-char-liste.md": {
	id: "html-special-char-liste.md";
  slug: "html-special-char-liste";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"ie8-responsive-webdesign-bilder-verzerrtzu-hoch.md": {
	id: "ie8-responsive-webdesign-bilder-verzerrtzu-hoch.md";
  slug: "ie8-responsive-webdesign-bilder-verzerrtzu-hoch";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"input-felder-und-submit-buttons-fuer-iphoneipad-via-css-stylen.md": {
	id: "input-felder-und-submit-buttons-fuer-iphoneipad-via-css-stylen.md";
  slug: "input-felder-und-submit-buttons-fuer-iphoneipad-via-css-stylen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"internet-explorer-bildrendering-verbessern.md": {
	id: "internet-explorer-bildrendering-verbessern.md";
  slug: "internet-explorer-bildrendering-verbessern";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"internet-explorer-scrollbar-nicht-ueber-den-content-laufen-lassen.md": {
	id: "internet-explorer-scrollbar-nicht-ueber-den-content-laufen-lassen.md";
  slug: "internet-explorer-scrollbar-nicht-ueber-den-content-laufen-lassen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-2-werte-in-einem-array-tauschen.md": {
	id: "javascript-2-werte-in-einem-array-tauschen.md";
  slug: "javascript-2-werte-in-einem-array-tauschen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-aequivalent-zur-php-funktion-nl2br.md": {
	id: "javascript-aequivalent-zur-php-funktion-nl2br.md";
  slug: "javascript-aequivalent-zur-php-funktion-nl2br";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-array-klonen-mit-es6.md": {
	id: "javascript-array-klonen-mit-es6.md";
  slug: "javascript-array-klonen-mit-es6";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-check-ob-array-leer-empty-ist.md": {
	id: "javascript-check-ob-array-leer-empty-ist.md";
  slug: "javascript-check-ob-array-leer-empty-ist";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-clip-path-unterstuetzung-ermitteln.md": {
	id: "javascript-clip-path-unterstuetzung-ermitteln.md";
  slug: "javascript-clip-path-unterstuetzung-ermitteln";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-console-log-fehlermeldungen-im-ie-abfangen.md": {
	id: "javascript-console-log-fehlermeldungen-im-ie-abfangen.md";
  slug: "javascript-console-log-fehlermeldungen-im-ie-abfangen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-datum-arrays-nach-zeitspanne-gruppieren.md": {
	id: "javascript-datum-arrays-nach-zeitspanne-gruppieren.md";
  slug: "javascript-datum-arrays-nach-zeitspanne-gruppieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-einen-hash-von-einem-string-erstellen.md": {
	id: "javascript-einen-hash-von-einem-string-erstellen.md";
  slug: "javascript-einen-hash-von-einem-string-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-fehler-durch-adblocker-vermeiden.md": {
	id: "javascript-fehler-durch-adblocker-vermeiden.md";
  slug: "javascript-fehler-durch-adblocker-vermeiden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-genaue-latlon-geokoordinaten-entfernungen-errechnen.md": {
	id: "javascript-genaue-latlon-geokoordinaten-entfernungen-errechnen.md";
  slug: "javascript-genaue-latlon-geokoordinaten-entfernungen-errechnen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-google-maps-marker-verschieben-wenn-mehrere-auf-derselben-position-liegen.md": {
	id: "javascript-google-maps-marker-verschieben-wenn-mehrere-auf-derselben-position-liegen.md";
  slug: "javascript-google-maps-marker-verschieben-wenn-mehrere-auf-derselben-position-liegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-mehrere-strings-auf-einmal-ersetzen-mit-2-arrays.md": {
	id: "javascript-mehrere-strings-auf-einmal-ersetzen-mit-2-arrays.md";
  slug: "javascript-mehrere-strings-auf-einmal-ersetzen-mit-2-arrays";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-scrollbarbreite-herausfinden.md": {
	id: "javascript-scrollbarbreite-herausfinden.md";
  slug: "javascript-scrollbarbreite-herausfinden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-scrolle-nach-unten-wenn-etwas-hinzugefuegt-wird-zum-beispiel-im-chat.md": {
	id: "javascript-scrolle-nach-unten-wenn-etwas-hinzugefuegt-wird-zum-beispiel-im-chat.md";
  slug: "javascript-scrolle-nach-unten-wenn-etwas-hinzugefuegt-wird-zum-beispiel-im-chat";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-standorte-in-der-naehe-aus-einer-liste-ermitteln.md": {
	id: "javascript-standorte-in-der-naehe-aus-einer-liste-ermitteln.md";
  slug: "javascript-standorte-in-der-naehe-aus-einer-liste-ermitteln";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-str-repeat-aequivalent-zur-php-funktion.md": {
	id: "javascript-str-repeat-aequivalent-zur-php-funktion.md";
  slug: "javascript-str-repeat-aequivalent-zur-php-funktion";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-string-prototype-funktion-ersten-buchstaben-grossschreiben-kapitalisieren.md": {
	id: "javascript-string-prototype-funktion-ersten-buchstaben-grossschreiben-kapitalisieren.md";
  slug: "javascript-string-prototype-funktion-ersten-buchstaben-grossschreiben-kapitalisieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-wie-bekommt-man-mehrere-einzigartige-element-aus-einem-array.md": {
	id: "javascript-wie-bekommt-man-mehrere-einzigartige-element-aus-einem-array.md";
  slug: "javascript-wie-bekommt-man-mehrere-einzigartige-element-aus-einem-array";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-window-resize-optimieren.md": {
	id: "javascript-window-resize-optimieren.md";
  slug: "javascript-window-resize-optimieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-windowlocationorigin-im-internet-explorer-benutzen.md": {
	id: "javascript-windowlocationorigin-im-internet-explorer-benutzen.md";
  slug: "javascript-windowlocationorigin-im-internet-explorer-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-youtube-id-aus-verschiedenen-urls-auslesen.md": {
	id: "javascript-youtube-id-aus-verschiedenen-urls-auslesen.md";
  slug: "javascript-youtube-id-aus-verschiedenen-urls-auslesen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascript-zurueck-history-back-link-button-bauen.md": {
	id: "javascript-zurueck-history-back-link-button-bauen.md";
  slug: "javascript-zurueck-history-back-link-button-bauen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"javascriptjquery-ein-element-aus-einem-array-loeschen.md": {
	id: "javascriptjquery-ein-element-aus-einem-array-loeschen.md";
  slug: "javascriptjquery-ein-element-aus-einem-array-loeschen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-2-elemente-tauschen-sortierfunktion.md": {
	id: "jquery-2-elemente-tauschen-sortierfunktion.md";
  slug: "jquery-2-elemente-tauschen-sortierfunktion";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-checken-ob-ein-element-ein-bestimmtes-inline-style-attribut-hat.md": {
	id: "jquery-checken-ob-ein-element-ein-bestimmtes-inline-style-attribut-hat.md";
  slug: "jquery-checken-ob-ein-element-ein-bestimmtes-inline-style-attribut-hat";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-css3-responsive-funktion-via-jquery-und-css-ausloesen-anstelle-von-window-width.md": {
	id: "jquery-css3-responsive-funktion-via-jquery-und-css-ausloesen-anstelle-von-window-width.md";
  slug: "jquery-css3-responsive-funktion-via-jquery-und-css-ausloesen-anstelle-von-window-width";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-font-resize.md": {
	id: "jquery-font-resize.md";
  slug: "jquery-font-resize";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-funktion-um-alle-klassen-als-array-zu-bekommen.md": {
	id: "jquery-funktion-um-alle-klassen-als-array-zu-bekommen.md";
  slug: "jquery-funktion-um-alle-klassen-als-array-zu-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-get-parameter-auslesen.md": {
	id: "jquery-get-parameter-auslesen.md";
  slug: "jquery-get-parameter-auslesen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-hasattr-funktioncheck-selber-machen.md": {
	id: "jquery-hasattr-funktioncheck-selber-machen.md";
  slug: "jquery-hasattr-funktioncheck-selber-machen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-html-tag-entfernen-ohne-den-inneren-contentinhalt.md": {
	id: "jquery-html-tag-entfernen-ohne-den-inneren-contentinhalt.md";
  slug: "jquery-html-tag-entfernen-ohne-den-inneren-contentinhalt";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-rechtsklick-komplett-oder-auf-bestimmten-elementen-unterbinden.md": {
	id: "jquery-rechtsklick-komplett-oder-auf-bestimmten-elementen-unterbinden.md";
  slug: "jquery-rechtsklick-komplett-oder-auf-bestimmten-elementen-unterbinden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-touch-friendly-image-lightbox-fuer-handys-tablets-und-desktops.md": {
	id: "jquery-touch-friendly-image-lightbox-fuer-handys-tablets-und-desktops.md";
  slug: "jquery-touch-friendly-image-lightbox-fuer-handys-tablets-und-desktops";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquery-ui-datepicker-daten-nicht-anwaehlbarverfuegbar-machen.md": {
	id: "jquery-ui-datepicker-daten-nicht-anwaehlbarverfuegbar-machen.md";
  slug: "jquery-ui-datepicker-daten-nicht-anwaehlbarverfuegbar-machen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jqueryjs-funktion-seiten-scroll-zu-einem-element.md": {
	id: "jqueryjs-funktion-seiten-scroll-zu-einem-element.md";
  slug: "jqueryjs-funktion-seiten-scroll-zu-einem-element";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"jquerymobileselect-plugin-um-select-navigationen-automatisch-aus-navigationen-zu-erstellen.md": {
	id: "jquerymobileselect-plugin-um-select-navigationen-automatisch-aus-navigationen-zu-erstellen.md";
  slug: "jquerymobileselect-plugin-um-select-navigationen-automatisch-aus-navigationen-zu-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"js-cue-dateien-fuer-playstation-1-emulatoren-erstellen.md": {
	id: "js-cue-dateien-fuer-playstation-1-emulatoren-erstellen.md";
  slug: "js-cue-dateien-fuer-playstation-1-emulatoren-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"laravel-5-logout-event-handler-erstellen.md": {
	id: "laravel-5-logout-event-handler-erstellen.md";
  slug: "laravel-5-logout-event-handler-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"laravel-bildroute-um-bilder-aus-dem-storage-ordner-anzuzeigen.md": {
	id: "laravel-bildroute-um-bilder-aus-dem-storage-ordner-anzuzeigen.md";
  slug: "laravel-bildroute-um-bilder-aus-dem-storage-ordner-anzuzeigen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"lavarel-blade-rekursive-partials-mit-each-erstellen.md": {
	id: "lavarel-blade-rekursive-partials-mit-each-erstellen.md";
  slug: "lavarel-blade-rekursive-partials-mit-each-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-aendern-der-php-cli-version.md": {
	id: "linux-aendern-der-php-cli-version.md";
  slug: "linux-aendern-der-php-cli-version";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-alle-dateien-rekursiv-in-einem-ordner-zaehlen.md": {
	id: "linux-alle-dateien-rekursiv-in-einem-ordner-zaehlen.md";
  slug: "linux-alle-dateien-rekursiv-in-einem-ordner-zaehlen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-alle-svn-ordner-recursiv-loeschen.md": {
	id: "linux-alle-svn-ordner-recursiv-loeschen.md";
  slug: "linux-alle-svn-ordner-recursiv-loeschen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-bash-history-mit-bild-hochrunter-page-updown.md": {
	id: "linux-bash-history-mit-bild-hochrunter-page-updown.md";
  slug: "linux-bash-history-mit-bild-hochrunter-page-updown";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-downloading-all-files-from-an-ftp-server.md": {
	id: "linux-downloading-all-files-from-an-ftp-server.md";
  slug: "linux-downloading-all-files-from-an-ftp-server";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-nano-editor-nuetzliche-shortcuts.md": {
	id: "linux-nano-editor-nuetzliche-shortcuts.md";
  slug: "linux-nano-editor-nuetzliche-shortcuts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-pageup-und-pagedown-fuer-autovervollstaendigung-benutzen.md": {
	id: "linux-pageup-und-pagedown-fuer-autovervollstaendigung-benutzen.md";
  slug: "linux-pageup-und-pagedown-fuer-autovervollstaendigung-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linux-sass-und-compass-auf-ubuntu-system-installieren.md": {
	id: "linux-sass-und-compass-auf-ubuntu-system-installieren.md";
  slug: "linux-sass-und-compass-auf-ubuntu-system-installieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"linuxraspberry-status-vom-dd-befehl-checken.md": {
	id: "linuxraspberry-status-vom-dd-befehl-checken.md";
  slug: "linuxraspberry-status-vom-dd-befehl-checken";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"locallang-dateien-fuer-js-bereitstellen-in-typo3.md": {
	id: "locallang-dateien-fuer-js-bereitstellen-in-typo3.md";
  slug: "locallang-dateien-fuer-js-bereitstellen-in-typo3";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"markieren-mit-der-maus-an-bestimmten-stellen-verhindern.md": {
	id: "markieren-mit-der-maus-an-bestimmten-stellen-verhindern.md";
  slug: "markieren-mit-der-maus-an-bestimmten-stellen-verhindern";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"maximale-dateigroessenuploadgroessen-bei-nginx-umstellen.md": {
	id: "maximale-dateigroessenuploadgroessen-bei-nginx-umstellen.md";
  slug: "maximale-dateigroessenuploadgroessen-bei-nginx-umstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"mehrere-checkboxen-mit-shift-checken-wie-bei-google-mail.md": {
	id: "mehrere-checkboxen-mit-shift-checken-wie-bei-google-mail.md";
  slug: "mehrere-checkboxen-mit-shift-checken-wie-bei-google-mail";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"menues-auf-seitenpages-ausgeben-mit-shortcode-in-wordpress.md": {
	id: "menues-auf-seitenpages-ausgeben-mit-shortcode-in-wordpress.md";
  slug: "menues-auf-seitenpages-ausgeben-mit-shortcode-in-wordpress";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"mit-jquery-word-styles-aus-einer-webseite-entfernen.md": {
	id: "mit-jquery-word-styles-aus-einer-webseite-entfernen.md";
  slug: "mit-jquery-word-styles-aus-einer-webseite-entfernen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"mysql-komma-separierte-elemente-aus-einer-spalte-zaehlen.md": {
	id: "mysql-komma-separierte-elemente-aus-einer-spalte-zaehlen.md";
  slug: "mysql-komma-separierte-elemente-aus-einer-spalte-zaehlen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"mysql-strict-mode-deaktivieren-damit-typo3-8-oder-laravel-wieder-laufen.md": {
	id: "mysql-strict-mode-deaktivieren-damit-typo3-8-oder-laravel-wieder-laufen.md";
  slug: "mysql-strict-mode-deaktivieren-damit-typo3-8-oder-laravel-wieder-laufen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"mysql-timestamp-to-php-date.md": {
	id: "mysql-timestamp-to-php-date.md";
  slug: "mysql-timestamp-to-php-date";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"nespi-like-lego-nes-case-anleitunginstruction.md": {
	id: "nespi-like-lego-nes-case-anleitunginstruction.md";
  slug: "nespi-like-lego-nes-case-anleitunginstruction";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"neues-youtube-design-schon-heute-benutzen.md": {
	id: "neues-youtube-design-schon-heute-benutzen.md";
  slug: "neues-youtube-design-schon-heute-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"nodejavascript-ecmascript-6-imports-in-node-benutzen.md": {
	id: "nodejavascript-ecmascript-6-imports-in-node-benutzen.md";
  slug: "nodejavascript-ecmascript-6-imports-in-node-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"nodejs-update-von-nodejs-so-funktionierts.md": {
	id: "nodejs-update-von-nodejs-so-funktionierts.md";
  slug: "nodejs-update-von-nodejs-so-funktionierts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"ordner-rekursiv-mit-php-zu-einer-zip-datei-packen.md": {
	id: "ordner-rekursiv-mit-php-zu-einer-zip-datei-packen.md";
  slug: "ordner-rekursiv-mit-php-zu-einer-zip-datei-packen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"photoshop-gewelltes-papier-erzeugen.md": {
	id: "photoshop-gewelltes-papier-erzeugen.md";
  slug: "photoshop-gewelltes-papier-erzeugen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-alle-ordner-und-unterordner-eines-ordners-auslesen.md": {
	id: "php-alle-ordner-und-unterordner-eines-ordners-auslesen.md";
  slug: "php-alle-ordner-und-unterordner-eines-ordners-auslesen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-alle-tage-eines-jahres-in-ein-array.md": {
	id: "php-alle-tage-eines-jahres-in-ein-array.md";
  slug: "php-alle-tage-eines-jahres-in-ein-array";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-array-nach-keys-eines-anderen-array-sortieren.md": {
	id: "php-array-nach-keys-eines-anderen-array-sortieren.md";
  slug: "php-array-nach-keys-eines-anderen-array-sortieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-array-nach-keys-eines-anderen-arrays-filtern.md": {
	id: "php-array-nach-keys-eines-anderen-arrays-filtern.md";
  slug: "php-array-nach-keys-eines-anderen-arrays-filtern";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-das-n-th-element-aus-einem-assoziativen-array-bekommen.md": {
	id: "php-das-n-th-element-aus-einem-assoziativen-array-bekommen.md";
  slug: "php-das-n-th-element-aus-einem-assoziativen-array-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-dateidownload-erzwingen-mit-modxsendfile-oder-readfile.md": {
	id: "php-dateidownload-erzwingen-mit-modxsendfile-oder-readfile.md";
  slug: "php-dateidownload-erzwingen-mit-modxsendfile-oder-readfile";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-datetime-attribute-fuer-html5-time-tag-erstellen.md": {
	id: "php-datetime-attribute-fuer-html5-time-tag-erstellen.md";
  slug: "php-datetime-attribute-fuer-html5-time-tag-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-den-key-bei-der-in-array-funktion-bekommen-falls-etwas-gefunden-wurde.md": {
	id: "php-den-key-bei-der-in-array-funktion-bekommen-falls-etwas-gefunden-wurde.md";
  slug: "php-den-key-bei-der-in-array-funktion-bekommen-falls-etwas-gefunden-wurde";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-durchschnittsfarbe-aus-einem-bild-ermitteln-und-erkennung-ob-hell-oder-dunkle-textfarbe-geeignet-ist.md": {
	id: "php-durchschnittsfarbe-aus-einem-bild-ermitteln-und-erkennung-ob-hell-oder-dunkle-textfarbe-geeignet-ist.md";
  slug: "php-durchschnittsfarbe-aus-einem-bild-ermitteln-und-erkennung-ob-hell-oder-dunkle-textfarbe-geeignet-ist";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-ein-multidimensionales-array-mit-einem-key-durchsuchen.md": {
	id: "php-ein-multidimensionales-array-mit-einem-key-durchsuchen.md";
  slug: "php-ein-multidimensionales-array-mit-einem-key-durchsuchen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-ein-multidimensionales-array-mit-einem-string-pfad-erstellen-dot.md": {
	id: "php-ein-multidimensionales-array-mit-einem-string-pfad-erstellen-dot.md";
  slug: "php-ein-multidimensionales-array-mit-einem-string-pfad-erstellen-dot";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-eine-grosse-datei-oeffnen-ohne-memory-limit-fehler-zu-bekommen.md": {
	id: "php-eine-grosse-datei-oeffnen-ohne-memory-limit-fehler-zu-bekommen.md";
  slug: "php-eine-grosse-datei-oeffnen-ohne-memory-limit-fehler-zu-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-einfacher-datei-download.md": {
	id: "php-einfacher-datei-download.md";
  slug: "php-einfacher-datei-download";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-einfaches-jahres-select-der-letzten-100-jahre-erstellen.md": {
	id: "php-einfaches-jahres-select-der-letzten-100-jahre-erstellen.md";
  slug: "php-einfaches-jahres-select-der-letzten-100-jahre-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-einfaches-monats-auswahl-select-erstellen.md": {
	id: "php-einfaches-monats-auswahl-select-erstellen.md";
  slug: "php-einfaches-monats-auswahl-select-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-file-get-contents-mit-htaccess-authentifizierung-benutzen.md": {
	id: "php-file-get-contents-mit-htaccess-authentifizierung-benutzen.md";
  slug: "php-file-get-contents-mit-htaccess-authentifizierung-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-file-get-contents-mit-self-signed-zertifikat-benutzen.md": {
	id: "php-file-get-contents-mit-self-signed-zertifikat-benutzen.md";
  slug: "php-file-get-contents-mit-self-signed-zertifikat-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-funktion-um-sonderzeichen-durch-entsprechung-des-alphabets-zu-ersetzen.md": {
	id: "php-funktion-um-sonderzeichen-durch-entsprechung-des-alphabets-zu-ersetzen.md";
  slug: "php-funktion-um-sonderzeichen-durch-entsprechung-des-alphabets-zu-ersetzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-gucken-ob-ein-element-eines-arrays-in-einem-anderen-array-ist.md": {
	id: "php-gucken-ob-ein-element-eines-arrays-in-einem-anderen-array-ist.md";
  slug: "php-gucken-ob-ein-element-eines-arrays-in-einem-anderen-array-ist";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-implode-ein-multi-dimensional-array-bei-bestimmtem-key.md": {
	id: "php-implode-ein-multi-dimensional-array-bei-bestimmtem-key.md";
  slug: "php-implode-ein-multi-dimensional-array-bei-bestimmtem-key";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-in-array-funktion-fuer-multidimensionale-arrays.md": {
	id: "php-in-array-funktion-fuer-multidimensionale-arrays.md";
  slug: "php-in-array-funktion-fuer-multidimensionale-arrays";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-iptc-daten-via-php-auslesen.md": {
	id: "php-iptc-daten-via-php-auslesen.md";
  slug: "php-iptc-daten-via-php-auslesen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-kommaseparierte-aufzaehlung-mit-und-vor-dem-letzen-eintrag-aus-einem-array-erzeugen.md": {
	id: "php-kommaseparierte-aufzaehlung-mit-und-vor-dem-letzen-eintrag-aus-einem-array-erzeugen.md";
  slug: "php-kommaseparierte-aufzaehlung-mit-und-vor-dem-letzen-eintrag-aus-einem-array-erzeugen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-median-aus-einem-array-berechnen.md": {
	id: "php-median-aus-einem-array-berechnen.md";
  slug: "php-median-aus-einem-array-berechnen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-mit-str-replace-nur-ersten-treffermatch-ersetzen.md": {
	id: "php-mit-str-replace-nur-ersten-treffermatch-ersetzen.md";
  slug: "php-mit-str-replace-nur-ersten-treffermatch-ersetzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-naechstes-datum-ohne-wochenende-bekommen.md": {
	id: "php-naechstes-datum-ohne-wochenende-bekommen.md";
  slug: "php-naechstes-datum-ohne-wochenende-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-rearrange-array-keys-array-schluessel-neu-anordnen.md": {
	id: "php-rearrange-array-keys-array-schluessel-neu-anordnen.md";
  slug: "php-rearrange-array-keys-array-schluessel-neu-anordnen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-russische-zeichen-erkennen-um-beispielsweise-spam-zu-vermeiden.md": {
	id: "php-russische-zeichen-erkennen-um-beispielsweise-spam-zu-vermeiden.md";
  slug: "php-russische-zeichen-erkennen-um-beispielsweise-spam-zu-vermeiden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-simple-kleine-view-template-klasse.md": {
	id: "php-simple-kleine-view-template-klasse.md";
  slug: "php-simple-kleine-view-template-klasse";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-umlautesonderzeichen-in-csv-export-encoding.md": {
	id: "php-umlautesonderzeichen-in-csv-export-encoding.md";
  slug: "php-umlautesonderzeichen-in-csv-export-encoding";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-underscore2camelcase-funktion.md": {
	id: "php-underscore2camelcase-funktion.md";
  slug: "php-underscore2camelcase-funktion";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-unset-by-value.md": {
	id: "php-unset-by-value.md";
  slug: "php-unset-by-value";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"php-wert-aus-einem-multidimensionalen-array-via-dot-notation-auslesen.md": {
	id: "php-wert-aus-einem-multidimensionalen-array-via-dot-notation-auslesen.md";
  slug: "php-wert-aus-einem-multidimensionalen-array-via-dot-notation-auslesen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"phpstorm-apache-ant-mit-phpstorm-unter-windows-benutzen.md": {
	id: "phpstorm-apache-ant-mit-phpstorm-unter-windows-benutzen.md";
  slug: "phpstorm-apache-ant-mit-phpstorm-unter-windows-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"phpstorm-unter-windows-git-bash-als-terminalconsole-anstelle-von-cmd-benutzen.md": {
	id: "phpstorm-unter-windows-git-bash-als-terminalconsole-anstelle-von-cmd-benutzen.md";
  slug: "phpstorm-unter-windows-git-bash-als-terminalconsole-anstelle-von-cmd-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"placeholder-attribut-in-allen-browser.md": {
	id: "placeholder-attribut-in-allen-browser.md";
  slug: "placeholder-attribut-in-allen-browser";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"prismjs-typoscript-highlighting.md": {
	id: "prismjs-typoscript-highlighting.md";
  slug: "prismjs-typoscript-highlighting";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"privater-modusprivate-browsing-im-mobile-safari.md": {
	id: "privater-modusprivate-browsing-im-mobile-safari.md";
  slug: "privater-modusprivate-browsing-im-mobile-safari";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"problemloesung-wordpress-laedt-bilder-hoch-kann-sie-aber-nicht-bearbeiten.md": {
	id: "problemloesung-wordpress-laedt-bilder-hoch-kann-sie-aber-nicht-bearbeiten.md";
  slug: "problemloesung-wordpress-laedt-bilder-hoch-kann-sie-aber-nicht-bearbeiten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"pt-punkt-zu-px-pixel-und-em-umrechnen.md": {
	id: "pt-punkt-zu-px-pixel-und-em-umrechnen.md";
  slug: "pt-punkt-zu-px-pixel-und-em-umrechnen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"raspberry-pi-einen-dslr-weddingphotobooth-erstellen.md": {
	id: "raspberry-pi-einen-dslr-weddingphotobooth-erstellen.md";
  slug: "raspberry-pi-einen-dslr-weddingphotobooth-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"raspberry-pi-webserver-und-datenbank-installieren.md": {
	id: "raspberry-pi-webserver-und-datenbank-installieren.md";
  slug: "raspberry-pi-webserver-und-datenbank-installieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"raspberry-sd-karte-wieder-normal-nutzbar-machenreformatieren.md": {
	id: "raspberry-sd-karte-wieder-normal-nutzbar-machenreformatieren.md";
  slug: "raspberry-sd-karte-wieder-normal-nutzbar-machenreformatieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"react-und-socketio-client-richtig-benutzen.md": {
	id: "react-und-socketio-client-richtig-benutzen.md";
  slug: "react-und-socketio-client-richtig-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"react-wie-erstelle-ich-einen-countdown-richtig.md": {
	id: "react-wie-erstelle-ich-einen-countdown-richtig.md";
  slug: "react-wie-erstelle-ich-einen-countdown-richtig";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"rechtsklick-aufs-logo-um-download-optionen-zu-oeffnen.md": {
	id: "rechtsklick-aufs-logo-um-download-optionen-zu-oeffnen.md";
  slug: "rechtsklick-aufs-logo-um-download-optionen-zu-oeffnen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"sass-color-variablen-so-gehts.md": {
	id: "sass-color-variablen-so-gehts.md";
  slug: "sass-color-variablen-so-gehts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"schoen-zum-seitenanfang-scrollen-mit-jquery-smooth-scroll-to-pagetop.md": {
	id: "schoen-zum-seitenanfang-scrollen-mit-jquery-smooth-scroll-to-pagetop.md";
  slug: "schoen-zum-seitenanfang-scrollen-mit-jquery-smooth-scroll-to-pagetop";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"sd-karte-am-mac-geht-nichtbzw-nur-leserechte-was-tun.md": {
	id: "sd-karte-am-mac-geht-nichtbzw-nur-leserechte-was-tun.md";
  slug: "sd-karte-am-mac-geht-nichtbzw-nur-leserechte-was-tun";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"skype-windows-werbung-abschalten-so-gehts.md": {
	id: "skype-windows-werbung-abschalten-so-gehts.md";
  slug: "skype-windows-werbung-abschalten-so-gehts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"sql-count-und-group-by-verwenden-im-select.md": {
	id: "sql-count-und-group-by-verwenden-im-select.md";
  slug: "sql-count-und-group-by-verwenden-im-select";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"steam-deck-ea-origin-spiele-installieren-und-lauffaehig-machen.md": {
	id: "steam-deck-ea-origin-spiele-installieren-und-lauffaehig-machen.md";
  slug: "steam-deck-ea-origin-spiele-installieren-und-lauffaehig-machen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"steam-deck-microsoft-visual-c-fehler-bei-spielen-beheben.md": {
	id: "steam-deck-microsoft-visual-c-fehler-bei-spielen-beheben.md";
  slug: "steam-deck-microsoft-visual-c-fehler-bei-spielen-beheben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"string-beschneiden-ohne-das-html-tags-kaputt-gehen.md": {
	id: "string-beschneiden-ohne-das-html-tags-kaputt-gehen.md";
  slug: "string-beschneiden-ohne-das-html-tags-kaputt-gehen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"svn-sass-cache-ignorieren-so-gehts.md": {
	id: "svn-sass-cache-ignorieren-so-gehts.md";
  slug: "svn-sass-cache-ignorieren-so-gehts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"symfony-4-eine-entity-aus-der-datenbank-erstellen.md": {
	id: "symfony-4-eine-entity-aus-der-datenbank-erstellen.md";
  slug: "symfony-4-eine-entity-aus-der-datenbank-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"symfony-unit-testing-session-aus-dem-requeststack-testen.md": {
	id: "symfony-unit-testing-session-aus-dem-requeststack-testen.md";
  slug: "symfony-unit-testing-session-aus-dem-requeststack-testen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"symfonyunit-test-deprecation-meldungen-verbergen.md": {
	id: "symfonyunit-test-deprecation-meldungen-verbergen.md";
  slug: "symfonyunit-test-deprecation-meldungen-verbergen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"trick-font-awesome-in-photoshop-verwenden.md": {
	id: "trick-font-awesome-in-photoshop-verwenden.md";
  slug: "trick-font-awesome-in-photoshop-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"twig-break-in-for-schleife-einbauen.md": {
	id: "twig-break-in-for-schleife-einbauen.md";
  slug: "twig-break-in-for-schleife-einbauen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"twig-stringlabel-nur-anzeigen-wenn-es-eine-uebersetzung-gibt-anstelle-des-keys-des-labels.md": {
	id: "twig-stringlabel-nur-anzeigen-wenn-es-eine-uebersetzung-gibt-anstelle-des-keys-des-labels.md";
  slug: "twig-stringlabel-nur-anzeigen-wenn-es-eine-uebersetzung-gibt-anstelle-des-keys-des-labels";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-62-loesung-fuer-dependency-injection-funktioniert-nicht.md": {
	id: "typo3-62-loesung-fuer-dependency-injection-funktioniert-nicht.md";
  slug: "typo3-62-loesung-fuer-dependency-injection-funktioniert-nicht";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-62-tsfe-funktionen-in-extensionhook-verfuegbar-machen.md": {
	id: "typo3-62-tsfe-funktionen-in-extensionhook-verfuegbar-machen.md";
  slug: "typo3-62-tsfe-funktionen-in-extensionhook-verfuegbar-machen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-8lts-fluid-styled-content-und-gridelements-zusammen-verwenden.md": {
	id: "typo3-8lts-fluid-styled-content-und-gridelements-zusammen-verwenden.md";
  slug: "typo3-8lts-fluid-styled-content-und-gridelements-zusammen-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-8lts-viewhelper-default-escaping-ausschalten.md": {
	id: "typo3-8lts-viewhelper-default-escaping-ausschalten.md";
  slug: "typo3-8lts-viewhelper-default-escaping-ausschalten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-addquerystring-getpost-parameter-mit-zu-links-im-tmenu-hinzufuegen.md": {
	id: "typo3-addquerystring-getpost-parameter-mit-zu-links-im-tmenu-hinzufuegen.md";
  slug: "typo3-addquerystring-getpost-parameter-mit-zu-links-im-tmenu-hinzufuegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-alle-aftersave-hooks-im-ueberblick-62-76lts.md": {
	id: "typo3-alle-aftersave-hooks-im-ueberblick-62-76lts.md";
  slug: "typo3-alle-aftersave-hooks-im-ueberblick-62-76lts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-alle-variablen-an-partial-uebergeben-fluid.md": {
	id: "typo3-alle-variablen-an-partial-uebergeben-fluid.md";
  slug: "typo3-alle-variablen-an-partial-uebergeben-fluid";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-alle-wraps-fuer-menues-und-stdwrap-hierarchisch-aufgelistet.md": {
	id: "typo3-alle-wraps-fuer-menues-und-stdwrap-hierarchisch-aufgelistet.md";
  slug: "typo3-alle-wraps-fuer-menues-und-stdwrap-hierarchisch-aufgelistet";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-automatische-anker-tags-entfernen.md": {
	id: "typo3-automatische-anker-tags-entfernen.md";
  slug: "typo3-automatische-anker-tags-entfernen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-backend-layout-spaltenbreite-festlegen.md": {
	id: "typo3-backend-layout-spaltenbreite-festlegen.md";
  slug: "typo3-backend-layout-spaltenbreite-festlegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-breadcrumb-navigation-mit-rootline-erstellen.md": {
	id: "typo3-breadcrumb-navigation-mit-rootline-erstellen.md";
  slug: "typo3-breadcrumb-navigation-mit-rootline-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-code-block-content-element-mit-syntax-highlighting.md": {
	id: "typo3-code-block-content-element-mit-syntax-highlighting.md";
  slug: "typo3-code-block-content-element-mit-syntax-highlighting";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-contextmenue-erweitern-und-eigenes-modul-mit-backend-routen-ansprechen.md": {
	id: "typo3-contextmenue-erweitern-und-eigenes-modul-mit-backend-routen-ansprechen.md";
  slug: "typo3-contextmenue-erweitern-und-eigenes-modul-mit-backend-routen-ansprechen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-debugging-und-fehlermeldungen-einschalten.md": {
	id: "typo3-debugging-und-fehlermeldungen-einschalten.md";
  slug: "typo3-debugging-und-fehlermeldungen-einschalten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-eigene-lightbox-benutzen-anstelle-des-javascript-popups.md": {
	id: "typo3-eigene-lightbox-benutzen-anstelle-des-javascript-popups.md";
  slug: "typo3-eigene-lightbox-benutzen-anstelle-des-javascript-popups";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-eigene-ordner-icons-verwenden.md": {
	id: "typo3-eigene-ordner-icons-verwenden.md";
  slug: "typo3-eigene-ordner-icons-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-ein-report-backendmodul-fuer-typo3-62-erstellen.md": {
	id: "typo3-ein-report-backendmodul-fuer-typo3-62-erstellen.md";
  slug: "typo3-ein-report-backendmodul-fuer-typo3-62-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-einen-auth-service-erstellen-ab-62.md": {
	id: "typo3-einen-auth-service-erstellen-ab-62.md";
  slug: "typo3-einen-auth-service-erstellen-ab-62";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-einen-pagetitleprovider-fuer-eigene-extension-erstellen.md": {
	id: "typo3-einen-pagetitleprovider-fuer-eigene-extension-erstellen.md";
  slug: "typo3-einen-pagetitleprovider-fuer-eigene-extension-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-entfernen-von-translate-to-und-kopie-tags.md": {
	id: "typo3-entfernen-von-translate-to-und-kopie-tags.md";
  slug: "typo3-entfernen-von-translate-to-und-kopie-tags";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-extbase-findbyuids-funktion-fuer-das-repository.md": {
	id: "typo3-extbase-findbyuids-funktion-fuer-das-repository.md";
  slug: "typo3-extbase-findbyuids-funktion-fuer-das-repository";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-extbase-get-all-pids-recurive-from-pagetree.md": {
	id: "typo3-extbase-get-all-pids-recurive-from-pagetree.md";
  slug: "typo3-extbase-get-all-pids-recurive-from-pagetree";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-extbase-klassen-in-hooks-und-userfuncs-benutzen.md": {
	id: "typo3-extbase-klassen-in-hooks-und-userfuncs-benutzen.md";
  slug: "typo3-extbase-klassen-in-hooks-und-userfuncs-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-extbase-typoscript-und-flexform-settings-gleichzeitig-verwenden.md": {
	id: "typo3-extbase-typoscript-und-flexform-settings-gleichzeitig-verwenden.md";
  slug: "typo3-extbase-typoscript-und-flexform-settings-gleichzeitig-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-extbase-ueberblick-ueber-query-und-repository-methoden.md": {
	id: "typo3-extbase-ueberblick-ueber-query-und-repository-methoden.md";
  slug: "typo3-extbase-ueberblick-ueber-query-und-repository-methoden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-extbase-variablen-debuggen-und-php-memory-limit-fehler-umgehen.md": {
	id: "typo3-extbase-variablen-debuggen-und-php-memory-limit-fehler-umgehen.md";
  slug: "typo3-extbase-variablen-debuggen-und-php-memory-limit-fehler-umgehen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-fal-in-eigener-extension-benutzen.md": {
	id: "typo3-fal-in-eigener-extension-benutzen.md";
  slug: "typo3-fal-in-eigener-extension-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-fe-login-funktioniert-im-internet-explorer-nicht.md": {
	id: "typo3-fe-login-funktioniert-im-internet-explorer-nicht.md";
  slug: "typo3-fe-login-funktioniert-im-internet-explorer-nicht";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-felogin-fe-login-um-eigene-marker-erweitern.md": {
	id: "typo3-felogin-fe-login-um-eigene-marker-erweitern.md";
  slug: "typo3-felogin-fe-login-um-eigene-marker-erweitern";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-filter-in-tca-typ-group-verwenden.md": {
	id: "typo3-filter-in-tca-typ-group-verwenden.md";
  slug: "typo3-filter-in-tca-typ-group-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-flexform-erweitern-extenden-am-beispiel-von-tt-news.md": {
	id: "typo3-flexform-erweitern-extenden-am-beispiel-von-tt-news.md";
  slug: "typo3-flexform-erweitern-extenden-am-beispiel-von-tt-news";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-fluid-extension-templates-ueberschreiben.md": {
	id: "typo3-fluid-extension-templates-ueberschreiben.md";
  slug: "typo3-fluid-extension-templates-ueberschreiben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-fluid-verschachtelte-variablen-viewhelper.md": {
	id: "typo3-fluid-verschachtelte-variablen-viewhelper.md";
  slug: "typo3-fluid-verschachtelte-variablen-viewhelper";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-fluid-viewhelper-fuer-ueberschriften-mit-h-tag-in-gridelements.md": {
	id: "typo3-fluid-viewhelper-fuer-ueberschriften-mit-h-tag-in-gridelements.md";
  slug: "typo3-fluid-viewhelper-fuer-ueberschriften-mit-h-tag-in-gridelements";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-google-web-fonts-mit-typoscript-einbinden-includecss.md": {
	id: "typo3-google-web-fonts-mit-typoscript-einbinden-includecss.md";
  slug: "typo3-google-web-fonts-mit-typoscript-einbinden-includecss";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-html-ausgabe-mit-middleware-komprimieren.md": {
	id: "typo3-html-ausgabe-mit-middleware-komprimieren.md";
  slug: "typo3-html-ausgabe-mit-middleware-komprimieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-im-extbase-controller-bzw-generell-ausserhalb-von-fluid-auf-die-sprachdatei-zugreifen.md": {
	id: "typo3-im-extbase-controller-bzw-generell-ausserhalb-von-fluid-auf-die-sprachdatei-zugreifen.md";
  slug: "typo3-im-extbase-controller-bzw-generell-ausserhalb-von-fluid-auf-die-sprachdatei-zugreifen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-in-array-viewhelper.md": {
	id: "typo3-in-array-viewhelper.md";
  slug: "typo3-in-array-viewhelper";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-in-extension-404-seite-werfen.md": {
	id: "typo3-in-extension-404-seite-werfen.md";
  slug: "typo3-in-extension-404-seite-werfen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-javascript-vor-den-extensions-einbinden-meistens-fuer-jquery.md": {
	id: "typo3-javascript-vor-den-extensions-einbinden-meistens-fuer-jquery.md";
  slug: "typo3-javascript-vor-den-extensions-einbinden-meistens-fuer-jquery";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-je-nach-backendlayout-anderes-fluid-tempate-ausspielen.md": {
	id: "typo3-je-nach-backendlayout-anderes-fluid-tempate-ausspielen.md";
  slug: "typo3-je-nach-backendlayout-anderes-fluid-tempate-ausspielen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-login-screen-anpassen-ab-7lts.md": {
	id: "typo3-login-screen-anpassen-ab-7lts.md";
  slug: "typo3-login-screen-anpassen-ab-7lts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-mehrfachemultiple-displaycond-ab-typo3-61.md": {
	id: "typo3-mehrfachemultiple-displaycond-ab-typo3-61.md";
  slug: "typo3-mehrfachemultiple-displaycond-ab-typo3-61";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-menue-alphabetisch-sortieren-via-typoscript.md": {
	id: "typo3-menue-alphabetisch-sortieren-via-typoscript.md";
  slug: "typo3-menue-alphabetisch-sortieren-via-typoscript";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-menue-aus-unterseiten-der-derzeitigen-seite-oder-der-eltern-seite.md": {
	id: "typo3-menue-aus-unterseiten-der-derzeitigen-seite-oder-der-eltern-seite.md";
  slug: "typo3-menue-aus-unterseiten-der-derzeitigen-seite-oder-der-eltern-seite";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-metatag-mit-datum-der-letzten-aenderung.md": {
	id: "typo3-metatag-mit-datum-der-letzten-aenderung.md";
  slug: "typo3-metatag-mit-datum-der-letzten-aenderung";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-pipe-symbol-in-wraps-verwenden.md": {
	id: "typo3-pipe-symbol-in-wraps-verwenden.md";
  slug: "typo3-pipe-symbol-in-wraps-verwenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-progress-bar-bei-schedulerplaner-task-anzeigen.md": {
	id: "typo3-progress-bar-bei-schedulerplaner-task-anzeigen.md";
  slug: "typo3-progress-bar-bei-schedulerplaner-task-anzeigen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-rahmenframes-fuer-content-elemente-ab-typo3-8lts.md": {
	id: "typo3-rahmenframes-fuer-content-elemente-ab-typo3-8lts.md";
  slug: "typo3-rahmenframes-fuer-content-elemente-ab-typo3-8lts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-reines-sql-query-von-exec-selectquery-bekommen.md": {
	id: "typo3-reines-sql-query-von-exec-selectquery-bekommen.md";
  slug: "typo3-reines-sql-query-von-exec-selectquery-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-salted-passwort-in-extensionphp-erstellen.md": {
	id: "typo3-salted-passwort-in-extensionphp-erstellen.md";
  slug: "typo3-salted-passwort-in-extensionphp-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-shortcut-menuepunkt-als-active-setzen.md": {
	id: "typo3-shortcut-menuepunkt-als-active-setzen.md";
  slug: "typo3-shortcut-menuepunkt-als-active-setzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-solr-bereichsuche-durch-query-filter-erstellen.md": {
	id: "typo3-solr-bereichsuche-durch-query-filter-erstellen.md";
  slug: "typo3-solr-bereichsuche-durch-query-filter-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-sortierung-von-kindchild-records-per-hand-sortieren.md": {
	id: "typo3-sortierung-von-kindchild-records-per-hand-sortieren.md";
  slug: "typo3-sortierung-von-kindchild-records-per-hand-sortieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-standardueberschrift-h2-anstatt-h1.md": {
	id: "typo3-standardueberschrift-h2-anstatt-h1.md";
  slug: "typo3-standardueberschrift-h2-anstatt-h1";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-storage-pid-fuer-das-gesamte-repository-ignorieren.md": {
	id: "typo3-storage-pid-fuer-das-gesamte-repository-ignorieren.md";
  slug: "typo3-storage-pid-fuer-das-gesamte-repository-ignorieren";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-str-replace-viewhelper-fuer-fluid-und-extbase.md": {
	id: "typo3-str-replace-viewhelper-fuer-fluid-und-extbase.md";
  slug: "typo3-str-replace-viewhelper-fuer-fluid-und-extbase";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-tca-datensatz-label-aus-mehreren-feldern-zusammensetzen.md": {
	id: "typo3-tca-datensatz-label-aus-mehreren-feldern-zusammensetzen.md";
  slug: "typo3-tca-datensatz-label-aus-mehreren-feldern-zusammensetzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-tca-sortierung-in-einem-select-feld-einstellen.md": {
	id: "typo3-tca-sortierung-in-einem-select-feld-einstellen.md";
  slug: "typo3-tca-sortierung-in-einem-select-feld-einstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-truncate-tabelle-mit-dem-querybuilder.md": {
	id: "typo3-truncate-tabelle-mit-dem-querybuilder.md";
  slug: "typo3-truncate-tabelle-mit-dem-querybuilder";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-tt-content-uid-im-fluid-template-benutzen.md": {
	id: "typo3-tt-content-uid-im-fluid-template-benutzen.md";
  slug: "typo3-tt-content-uid-im-fluid-template-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-tt-news-absolute-pfade-fuer-bilder-im-rssxml-feed.md": {
	id: "typo3-tt-news-absolute-pfade-fuer-bilder-im-rssxml-feed.md";
  slug: "typo3-tt-news-absolute-pfade-fuer-bilder-im-rssxml-feed";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-typoscipt-settings-mit-configurationmanager-bekommen.md": {
	id: "typo3-typoscipt-settings-mit-configurationmanager-bekommen.md";
  slug: "typo3-typoscipt-settings-mit-configurationmanager-bekommen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-typoscript-bild-aus-dem-mediafeldseiteneigenschaften-einer-seite-ausgeben.md": {
	id: "typo3-typoscript-bild-aus-dem-mediafeldseiteneigenschaften-einer-seite-ausgeben.md";
  slug: "typo3-typoscript-bild-aus-dem-mediafeldseiteneigenschaften-einer-seite-ausgeben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-uebersicht-unterschiedlicher-arten-von-flexform-felder.md": {
	id: "typo3-uebersicht-unterschiedlicher-arten-von-flexform-felder.md";
  slug: "typo3-uebersicht-unterschiedlicher-arten-von-flexform-felder";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-unexpected-server-response-in-environment-status.md": {
	id: "typo3-unexpected-server-response-in-environment-status.md";
  slug: "typo3-unexpected-server-response-in-environment-status";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-userfunc-als-displaycond-im-tca-benutzen.md": {
	id: "typo3-userfunc-als-displaycond-im-tca-benutzen.md";
  slug: "typo3-userfunc-als-displaycond-im-tca-benutzen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3-viewhelper-zum-rendern-von-tt-content-anhand-der-uid.md": {
	id: "typo3-viewhelper-zum-rendern-von-tt-content-anhand-der-uid.md";
  slug: "typo3-viewhelper-zum-rendern-von-tt-content-anhand-der-uid";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"typo3system-locale-not-set-on-utf-8-file-system-beheben.md": {
	id: "typo3system-locale-not-set-on-utf-8-file-system-beheben.md";
  slug: "typo3system-locale-not-set-on-utf-8-file-system-beheben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"umleitung-auf-mobile-seite-mit-bestaetigung.md": {
	id: "umleitung-auf-mobile-seite-mit-bestaetigung.md";
  slug: "umleitung-auf-mobile-seite-mit-bestaetigung";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"umleitung-auf-mobiles-template-in-wordpress.md": {
	id: "umleitung-auf-mobiles-template-in-wordpress.md";
  slug: "umleitung-auf-mobiles-template-in-wordpress";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"urls-in-der-datenbank-aendern-fuer-wordpress-seitenumzuege.md": {
	id: "urls-in-der-datenbank-aendern-fuer-wordpress-seitenumzuege.md";
  slug: "urls-in-der-datenbank-aendern-fuer-wordpress-seitenumzuege";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"versteckte-dateien-am-mac-einblenden-oder-ausblenden.md": {
	id: "versteckte-dateien-am-mac-einblenden-oder-ausblenden.md";
  slug: "versteckte-dateien-am-mac-einblenden-oder-ausblenden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"webpackencore-dynamische-entries-erstellen.md": {
	id: "webpackencore-dynamische-entries-erstellen.md";
  slug: "webpackencore-dynamische-entries-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"weinsberg-carabuscaratour-isofix-nachruesten-evtl-auch-bei-knaus.md": {
	id: "weinsberg-carabuscaratour-isofix-nachruesten-evtl-auch-bei-knaus.md";
  slug: "weinsberg-carabuscaratour-isofix-nachruesten-evtl-auch-bei-knaus";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wie-ueberprueft-man-ob-man-mit-der-maus-ueber-einem-element-ist-in-jquery.md": {
	id: "wie-ueberprueft-man-ob-man-mit-der-maus-ueber-einem-element-ist-in-jquery.md";
  slug: "wie-ueberprueft-man-ob-man-mit-der-maus-ueber-einem-element-ist-in-jquery";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"windows-8-tilekachel-fuer-webseite-einrichten-so-gehts.md": {
	id: "windows-8-tilekachel-fuer-webseite-einrichten-so-gehts.md";
  slug: "windows-8-tilekachel-fuer-webseite-einrichten-so-gehts";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"windows-8-ui-metro-style-auf-dem-hp-touchpad.md": {
	id: "windows-8-ui-metro-style-auf-dem-hp-touchpad.md";
  slug: "windows-8-ui-metro-style-auf-dem-hp-touchpad";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"windows-grosse-dummy-dateien-mit-der-kommandozeile-cmd-erstellen.md": {
	id: "windows-grosse-dummy-dateien-mit-der-kommandozeile-cmd-erstellen.md";
  slug: "windows-grosse-dummy-dateien-mit-der-kommandozeile-cmd-erstellen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"windowsphone-webfonts-auf-html5-windows-phone-apps-zum-laufen-kriegen.md": {
	id: "windowsphone-webfonts-auf-html5-windows-phone-apps-zum-laufen-kriegen.md";
  slug: "windowsphone-webfonts-auf-html5-windows-phone-apps-zum-laufen-kriegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-breadcrumb-navigation-ohne-plugin.md": {
	id: "wordpress-breadcrumb-navigation-ohne-plugin.md";
  slug: "wordpress-breadcrumb-navigation-ohne-plugin";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-einen-einstellungssettings-link-in-die-plugin-liste-hinzufuegen.md": {
	id: "wordpress-einen-einstellungssettings-link-in-die-plugin-liste-hinzufuegen.md";
  slug: "wordpress-einen-einstellungssettings-link-in-die-plugin-liste-hinzufuegen";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-jquery-im-footer-laden.md": {
	id: "wordpress-jquery-im-footer-laden.md";
  slug: "wordpress-jquery-im-footer-laden";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-menu-als-selectdropdown-fuer-mobile-seiten.md": {
	id: "wordpress-menu-als-selectdropdown-fuer-mobile-seiten.md";
  slug: "wordpress-menu-als-selectdropdown-fuer-mobile-seiten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-paginierung-funktion.md": {
	id: "wordpress-paginierung-funktion.md";
  slug: "wordpress-paginierung-funktion";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-php-daten-zu-javascript-uebergeben.md": {
	id: "wordpress-php-daten-zu-javascript-uebergeben.md";
  slug: "wordpress-php-daten-zu-javascript-uebergeben";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-problemloesung-fuer-fehlende-adminbar-in-wordpress-templates.md": {
	id: "wordpress-problemloesung-fuer-fehlende-adminbar-in-wordpress-templates.md";
  slug: "wordpress-problemloesung-fuer-fehlende-adminbar-in-wordpress-templates";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-wartungsmodus-nach-aktualisierung-manuell-ausschalten.md": {
	id: "wordpress-wartungsmodus-nach-aktualisierung-manuell-ausschalten.md";
  slug: "wordpress-wartungsmodus-nach-aktualisierung-manuell-ausschalten";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
"wordpress-word-count-ermitteln.md": {
	id: "wordpress-word-count-ermitteln.md";
  slug: "wordpress-word-count-ermitteln";
  body: string;
  collection: "tutorials";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ExtractLoaderTypes<T> = T extends import('astro/loaders').LiveLoader<
		infer TData,
		infer TEntryFilter,
		infer TCollectionFilter,
		infer TError
	>
		? { data: TData; entryFilter: TEntryFilter; collectionFilter: TCollectionFilter; error: TError }
		: { data: never; entryFilter: never; collectionFilter: never; error: never };
	type ExtractDataType<T> = ExtractLoaderTypes<T>['data'];
	type ExtractEntryFilterType<T> = ExtractLoaderTypes<T>['entryFilter'];
	type ExtractCollectionFilterType<T> = ExtractLoaderTypes<T>['collectionFilter'];
	type ExtractErrorType<T> = ExtractLoaderTypes<T>['error'];

	type LiveLoaderDataType<C extends keyof LiveContentConfig['collections']> =
		LiveContentConfig['collections'][C]['schema'] extends undefined
			? ExtractDataType<LiveContentConfig['collections'][C]['loader']>
			: import('astro/zod').infer<
					Exclude<LiveContentConfig['collections'][C]['schema'], undefined>
				>;
	type LiveLoaderEntryFilterType<C extends keyof LiveContentConfig['collections']> =
		ExtractEntryFilterType<LiveContentConfig['collections'][C]['loader']>;
	type LiveLoaderCollectionFilterType<C extends keyof LiveContentConfig['collections']> =
		ExtractCollectionFilterType<LiveContentConfig['collections'][C]['loader']>;
	type LiveLoaderErrorType<C extends keyof LiveContentConfig['collections']> = ExtractErrorType<
		LiveContentConfig['collections'][C]['loader']
	>;

	export type ContentConfig = never;
	export type LiveContentConfig = never;
}
