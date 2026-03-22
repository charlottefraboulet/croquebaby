'use client';

import { useState, useEffect, useCallback } from 'react';
import { FoodEntry } from '@/lib/types';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
    setIsHydrated(true);
  }, [key]);

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(prev => {
      const valueToStore = value instanceof Function ? value(prev) : value;
      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
      return valueToStore;
    });
  }, [key]);

  return [isHydrated ? storedValue : initialValue, setValue];
}

export function useFoodEntries() {
  const [entries, setEntries] = useLocalStorage<Record<string, FoodEntry>>('croquebaby-foods', {});

  const toggleFood = useCallback((foodId: string) => {
    setEntries(prev => {
      const existing = prev[foodId];
      if (existing?.introduced) {
        const { [foodId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [foodId]: {
          foodId,
          introduced: true,
          date: new Date().toISOString().split('T')[0],
        },
      };
    });
  }, [setEntries]);

  const setReaction = useCallback((foodId: string, reaction: FoodEntry['reaction']) => {
    setEntries(prev => ({
      ...prev,
      [foodId]: {
        ...prev[foodId],
        foodId,
        introduced: true,
        reaction,
        date: prev[foodId]?.date || new Date().toISOString().split('T')[0],
      },
    }));
  }, [setEntries]);

  return { entries, toggleFood, setReaction };
}
