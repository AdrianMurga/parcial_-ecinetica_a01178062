input.onButtonPressed(Button.A, function () {
    basic.showString("Ec =")
    Velocidad_al_Cuadrado = Velocidad ** 2
    Valor_Arriba = Masa * Velocidad_al_Cuadrado
    Total = Valor_Arriba / 2
    basic.showNumber(Total)
})
let Total = 0
let Valor_Arriba = 0
let Velocidad_al_Cuadrado = 0
let Velocidad = 0
let Masa = 0
basic.showString("Adrian Murga A01178062")
Masa = 17.78
basic.showString("kg")
Velocidad = 15
basic.showString("m/s")
