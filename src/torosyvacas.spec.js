import TorosYVacas from "./TorosYVacas";
const toro = new TorosYVacas();
describe("INGRESAR CODIGO", () => {
    it("ingresar clave", () => {
      expect(toro.setClave("1234")).toEqual("ok");
    });
    it("ingresar clave solo numeros", () => {
        expect(toro.setClave("codigo")).toEqual("INGRESE SOLO NUMEROS");
    });
    it("ingresar clave con longitud diferente a 4 digitos", () => {
        expect(toro.setClave("12345")).toEqual("INGRESE CLAVE DE 4 DIGITOS");
    });
    it("ingresar clave vacia", () => {
        expect(toro.setClave("")).toEqual("NECESITA INGRESAR UNA CLAVE");
    });
    it("ingresar intento solo numeros", () => {
        expect(toro.intentar("intentar")).toEqual("INGRESE SOLO NUMEROS");
    });
    it("ingresar intento con longitud diferente a 4 digitos", () => {
        expect(toro.intentar("12345")).toEqual("NGRESE INTENTO DE 4 DIGITOS");
    });

  });