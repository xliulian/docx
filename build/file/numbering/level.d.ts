import { XmlComponent } from "../../file/xml-components";
import { AlignmentType } from "../paragraph/formatting";
import { ILevelParagraphStylePropertiesOptions } from "../paragraph/properties";
import { IRunStylePropertiesOptions } from "../paragraph/run/properties";
export declare enum LevelFormat {
    DECIMAL = "decimal",
    UPPER_ROMAN = "upperRoman",
    LOWER_ROMAN = "lowerRoman",
    UPPER_LETTER = "upperLetter",
    LOWER_LETTER = "lowerLetter",
    ORDINAL = "ordinal",
    CARDINAL_TEXT = "cardinalText",
    ORDINAL_TEXT = "ordinalText",
    HEX = "hex",
    CHICAGO = "chicago",
    IDEOGRAPH__DIGITAL = "ideographDigital",
    JAPANESE_COUNTING = "japaneseCounting",
    AIUEO = "aiueo",
    IROHA = "iroha",
    DECIMAL_FULL_WIDTH = "decimalFullWidth",
    DECIMAL_HALF_WIDTH = "decimalHalfWidth",
    JAPANESE_LEGAL = "japaneseLegal",
    JAPANESE_DIGITAL_TEN_THOUSAND = "japaneseDigitalTenThousand",
    DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle",
    DECIMAL_FULL_WIDTH2 = "decimalFullWidth2",
    AIUEO_FULL_WIDTH = "aiueoFullWidth",
    IROHA_FULL_WIDTH = "irohaFullWidth",
    DECIMAL_ZERO = "decimalZero",
    BULLET = "bullet",
    GANADA = "ganada",
    CHOSUNG = "chosung",
    DECIMAL_ENCLOSED_FULLSTOP = "decimalEnclosedFullstop",
    DECIMAL_ENCLOSED_PARENTHESES = "decimalEnclosedParen",
    DECIMAL_ENCLOSED_CIRCLE_CHINESE = "decimalEnclosedCircleChinese",
    IDEOGRAPH_ENCLOSED_CIRCLE = "ideographEnclosedCircle",
    IDEOGRAPH_TRADITIONAL = "ideographTraditional",
    IDEOGRAPH_ZODIAC = "ideographZodiac",
    IDEOGRAPH_ZODIAC_TRADITIONAL = "ideographZodiacTraditional",
    TAIWANESE_COUNTING = "taiwaneseCounting",
    IDEOGRAPH_LEGAL_TRADITIONAL = "ideographLegalTraditional",
    TAIWANESE_COUNTING_THOUSAND = "taiwaneseCountingThousand",
    TAIWANESE_DIGITAL = "taiwaneseDigital",
    CHINESE_COUNTING = "chineseCounting",
    CHINESE_LEGAL_SIMPLIFIED = "chineseLegalSimplified",
    CHINESE_COUNTING_THOUSAND = "chineseCountingThousand",
    KOREAN_DIGITAL = "koreanDigital",
    KOREAN_COUNTING = "koreanCounting",
    KOREAN_LEGAL = "koreanLegal",
    KOREAN_DIGITAL2 = "koreanDigital2",
    VIETNAMESE_COUNTING = "vietnameseCounting",
    RUSSIAN_LOWER = "russianLower",
    RUSSIAN_UPPER = "russianUpper",
    NONE = "none",
    NUMBER_IN_DASH = "numberInDash",
    HEBREW1 = "hebrew1",
    HEBREW2 = "hebrew2",
    ARABIC_ALPHA = "arabicAlpha",
    ARABIC_ABJAD = "arabicAbjad",
    HINDI_VOWELS = "hindiVowels",
    HINDI_CONSONANTS = "hindiConsonants",
    HINDI_NUMBERS = "hindiNumbers",
    HINDI_COUNTING = "hindiCounting",
    THAI_LETTERS = "thaiLetters",
    THAI_NUMBERS = "thaiNumbers",
    THAI_COUNTING = "thaiCounting",
    BAHT_TEXT = "bahtText",
    DOLLAR_TEXT = "dollarText",
    CUSTOM = "custom"
}
export declare enum LevelSuffix {
    NOTHING = "nothing",
    SPACE = "space",
    TAB = "tab"
}
export interface ILevelsOptions {
    readonly level: number;
    readonly format?: LevelFormat;
    readonly text?: string;
    readonly alignment?: AlignmentType;
    readonly start?: number;
    readonly suffix?: LevelSuffix;
    readonly isLegalNumberingStyle?: boolean;
    readonly style?: {
        readonly run?: IRunStylePropertiesOptions;
        readonly paragraph?: ILevelParagraphStylePropertiesOptions;
    };
}
export declare class LevelBase extends XmlComponent {
    private readonly paragraphProperties;
    private readonly runProperties;
    constructor({ level, format, text, alignment, start, style, suffix, isLegalNumberingStyle, }: ILevelsOptions);
}
export declare class Level extends LevelBase {
}
export declare class LevelForOverride extends LevelBase {
}
