# Who Are Ya? · Juego Diario de Adivinanza de Futbolistas

Juego web interactivo para navegador inspirado en Wordle y Who Are You, desarrollado en JavaScript vanilla y Tailwind CSS con selección diaria determinista y persistencia local.

- **Documentación de arquitectura:** [DeepWiki - who-are-ya](https://deepwiki.com/eneekoruiz/who-are-ya)

## Propósito y Valor Técnico

Construido para ofrecer una experiencia de juego ágil y sin dependencias de frameworks pesados, optimizando la velocidad de carga y garantizando que el usuario pueda jugar la partida del día incluso con conectividad limitada.

- **Generación Diaria Determinista:** Algoritmo de hash basado en la fecha del sistema que selecciona el futbolista misterioso del día, asegurando que todos los usuarios compitan en el mismo reto sin requerir sincronización constante con el servidor.
- **Motor de Evaluación de Pistas en Cliente:** Compara los atributos del jugador seleccionado por el usuario frente al objetivo (nacionalidad, liga, club, posición táctica y rango de edad) con retroalimentación visual inmediata mediante colores semánticos (coincidencia exacta, coincidencia parcial, mayor o menor edad).
- **Búsqueda Autocompletada de Alto Rendimiento:** Componente de autocompletado nativo que filtra en memoria nombres, alias y escudos de miles de futbolistas de las principales ligas europeas con cero latencia de red.
- **Seguimiento de Rachas y Estadísticas:** Almacena el estado de la partida en curso, el historial de victorias y la racha de días consecutivos mediante la API de LocalStorage del navegador.

## Stack Técnico

- **Frontend:** JavaScript vanilla (ES6+), HTML5 semántico
- **Estilos & Responsive:** Tailwind CSS
- **Almacenamiento en Cliente:** Web Storage API (LocalStorage)
- **Datos:** Datasets estructurados en JSON con estadísticas y trayectorias de futbolistas

## Puesta en Marcha Local

### Prerrequisitos

- Cualquier navegador web moderno o servidor HTTP estático

### Ejecución Local

```bash
git clone https://github.com/eneekoruiz/who-are-ya.git
cd who-are-ya

# Servir archivos estáticos con Node.js
npx serve .

# O alternativamente con Python
python -m http.server 8000
```
