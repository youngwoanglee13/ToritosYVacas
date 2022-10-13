import TorosYVacas from "./TorosYVacas";
const toro = new TorosYVacas();
describe("INGRESAR CODIGO", () => {
    it("ingresar clave", () => {
      expect(toro.setClave("1234")).toEqual("%%");
    });
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
        toro.setClave("1117");
        expect(toro.intentar("5558")).toEqual("#");
    });
    it("ingresar intento con dos terneras superiores", () => {
        toro.setClave("1177");
        expect(toro.intentar("5588")).toEqual("##");
    });
    it("ingresar intento con dos terneras inferiores", () => {
        toro.setClave("1177");
        expect(toro.intentar("5566")).toEqual("##");
    });
    it("ingresar intento diferentes tipos de terneras", () => {
        toro.setClave("1177");
        expect(toro.intentar("5568")).toEqual("##");
    });
    it("ingresar intento bisonte", () => {
        expect(toro.setClave("1113")).toEqual("%");
    });
    it("ingresar intento con multiples bisontes", () => {
        expect(toro.setClave("1135")).toEqual("%%");
    });
  });