import torosyvacas from "./torosyvacas";
const toro = new torosyvacas();
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
        expect(toro.intentar("12345")).toEqual("INGRESE INTENTO DE 4 DIGITOS");
    });
    it("ingresar intento vacio", () => {
        expect(toro.intentar("")).toEqual("NECESITA INGRESAR UN INTENTO");
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
    it("ingresar intento con vaca y toro", () => {
        expect(toro.intentar("1312")).toEqual("!**");
    });

  });