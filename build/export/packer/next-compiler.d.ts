import * as JSZip from "jszip";
import { File } from "../../file/file";
import { PrettifyType } from "./packer";
export declare class Compiler {
    private readonly formatter;
    private readonly imageReplacer;
    private readonly numberingReplacer;
    constructor();
    compile(file: File, prettifyXml?: boolean | PrettifyType): JSZip;
    private xmlifyFile;
}
