export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600); // Arredonda para baixo
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) //Se não tiver ao menos 2 caracteres, adicionar o "0"
        .join(":")

    return timeString;
}