import TorosYVacas from "./TorosYVacas";
const toro = new TorosYVacas();
describe("INGRESAR CODIGO", () => {
    it("ingresar clave solo numeros", () => {
        expect(toro.setClave("codigo")).toEqual("INGRESE SOLO NUMEROS");
    });
    it("ingresar clave con longitud diferente a 4 digitos", () => {
        expect(toro.setClave("12345")).toEqual("INGRESE UN NUMERO DE 4 DIGITOS");
    });
    it("ingresar clave vacia", () => {
        expect(toro.setClave("")).toEqual("NECESITA INGRESAR UN NUMERO");
    });
    it("ingresar intento solo numeros", () => {
        expect(toro.intentar("intentar")).toEqual("INGRESE SOLO NUMEROS");
    });
    it("ingresar intento con longitud diferente a 4 digitos", () => {
        expect(toro.intentar("12345")).toEqual("INGRESE UN NUMERO DE 4 DIGITOS");
    });
    it("ingresar intento vacio", () => {
        expect(toro.intentar("")).toEqual("NECESITA INGRESAR UN NUMERO");
    });
    it("ingresar intento igual a la clave secreta", () => {
        expect(toro.intentar("1234")).toEqual("GANASTE");
    });
    it("ingresar intento con toro", () => {
        expect(toro.intentar("1554")).toEqual("!!");
    });
    it("ingresar intento con vaca", () => {
        expect(toro.intentar("5512")).toEqual("**");
    });
    it("ingresar intento con ternera", () => {
        toro.setClave("1112")
        expect(toro.intentar("1113")).toEqual("#");
    });
  });