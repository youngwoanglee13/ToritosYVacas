import TorosYVacas from "./TorosYVacas";
const toro = new TorosYVacas();
describe("INGRESAR CODIGO", () => {
    /*it("Posicion inicial", () => {
      expect(cD.ejecutarComando()).toEqual("0,0N");
    });*/
    it("ingresar clave", () => {
      expect(toro.setClave("1234")).toEqual("ok");
    });
    it("ingresar clave solo numeros", () => {
        expect(toro.setClave("codigo")).toEqual("INGRESE SOLO NUMEROS");
    });
    it("ingresar clave con longitud diferente a 4 digitos", () => {
        expect(toro.setClave("12345")).toEqual("INGRESE CLAVE DE 4 DIGITOS");
    });
      

  });