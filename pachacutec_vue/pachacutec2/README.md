# Solucion provisoria para los assets
    1- build con los types="text/javascript" (que no compile los js estaticos con type="module")
    2- Poner los assets/js manualmente en dist
    3- Ver que los <script src> apunten a donde corresponde en dist/index.html hacia -> dist/assets/js/lala.js
    4-Firebase deploy



# Pendiente
    Empaquetar manualmente los assets o automatizarlo con gulp