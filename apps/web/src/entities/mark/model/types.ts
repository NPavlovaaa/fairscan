import type { Mark } from '@fairscan/shared';

/**
 * Состояние отправки отметки на сервер. Хранится в IndexedDB
 * и переживает перезапуск приложения.
 * pending — лежит в очереди, ещё не отправлена
 * synced — сервер подтвердил приём
 * failed — сервер отверг данные; повторная отправка не поможет
 */
export type SyncState = 'pending' | 'synced' | 'failed';

/** Отметка рекрутера о посетителе с локальным состоянием очереди */
export type LocalMark = Mark & { syncState: SyncState };