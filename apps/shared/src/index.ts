/**
 * Решение рекрутера о посетителе.
 * Меняется, если рекрутер передумал.
 */

export type MarkStatus = 'interested' | 'invited' | 'rejected';

/**
 * Отметка рекрутера о посетителе — то, чем обмениваются клиент и сервер.
 * Локальное состояние очереди сюда не входит: см. LocalMark на клиенте.
 */
export type Mark = {
    /** UUID, создаётся на клиенте в момент отметки: по нему сервер отбрасывает повторные отправки */
    id: string;
    visitorId: string;
    status: MarkStatus;
    note?: string;
    createdAt: string;
    updatedAt: string;
};