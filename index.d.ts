/// <reference types="node"/>

declare namespace fontfaceGen {
  interface Options {
    /**
			Destination folder where @font-face CSS rules should be created.

			@default "./src/css/partial"
		*/
    filepath?: string | undefined;

    /**
			Name of file with @font-face CSS rules.

			@default "fonts.css"
		*/
    filename?: string | undefined;

    /**
			Destination folder where fonts are located.

			@default "../fonts"
		*/
    destpath?: string | undefined;
  }
}

declare function fontfaceGen(
  options?: fontfaceGen.Options
): NodeJS.ReadWriteStream;

export = fontfaceGen;
