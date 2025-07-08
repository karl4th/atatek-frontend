# Документация API сервиса Aulet (Семейные деревья)

## Обзор

Сервис **Aulet** предназначен для создания и управления семейными деревьями. Он обеспечивает создание, чтение, обновление и удаление персон в семейном дереве с поддержкой различных типов связей (супруги, дети, родители).

### Особенности:
- 🌳 Полная поддержка семейных связей
- 📊 Совместимость с библиотекой [family-chart](https://www.npmjs.com/package/family-chart)
- 👥 Изоляция данных по пользователям
- 🔄 Двунаправленные связи
- 🗑️ Мягкое удаление
- 🖼️ Поддержка аватаров

---

## Базовая информация

**Базовый URL:** `/api/aulet`  
**Авторизация:** Bearer JWT Token  
**Content-Type:** `application/json`

---

## Структура данных

### PersonData
```json
{
  "first_name": "string",      // Имя (обязательно)
  "last_name": "string",       // Фамилия (обязательно)
  "gender": "M|F",            // Пол: M (мужской) или F (женский)
  "birthday": "string",        // Дата рождения в формате "YYYY-MM-DD"
  "death_date": "string|null", // Дата смерти (необязательно)
  "avatar": "string|null"      // URL аватара (необязательно, по умолчанию "def-ava.png")
}
```

### Rels (Связи)
```json
{
  "spouses": [int],   // Массив ID супругов
  "children": [int],  // Массив ID детей
  "father": int|null, // ID отца
  "mother": int|null  // ID матери
}
```

### Формат для family-chart
```json
{
  "id": "string",
  "rels": {
    "spouses": ["string"],  // Только супруги и дети для family-chart
    "children": ["string"]
  },
  "data": {
    "first name": "string",
    "last name": "string", 
    "birthday": "string",
    "avatar": "string",
    "gender": "M|F",
    "death_date": "string" // Если есть
  }
}
```

---

## API Endpoints

### 1. Получить семейное дерево
```http
GET /api/aulet/my
```

**Описание:** Возвращает полное семейное дерево пользователя в формате family-chart.

**Заголовки:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Ответ:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "rels": {
        "spouses": ["2"],
        "children": ["3"]
      },
      "data": {
        "first name": "Иван",
        "last name": "Петров",
        "birthday": "1975-05-15",
        "avatar": "def-ava.png",
        "gender": "M"
      }
    }
  ]
}
```

**Коды ответов:**
- `200` - Успешно
- `401` - Неавторизован
- `500` - Внутренняя ошибка сервера

---

### 2. Создать персону
```http
POST /api/aulet/my/create
```

**Описание:** Создает новую персону в семейном дереве.

**Заголовки:**
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Тело запроса:**
```json
{
  "user_id": 1,
  "data": {
    "first_name": "Иван",
    "last_name": "Петров",
    "gender": "M",
    "birthday": "1975-05-15",
    "death_date": null,
    "avatar": null
  },
  "rels": {
    "spouses": [],
    "children": [],
    "father": null,
    "mother": null
  }
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "rels": {
      "spouses": [],
      "children": []
    },
    "data": {
      "first name": "Иван",
      "last name": "Петров",
      "birthday": "1975-05-15",
      "avatar": "def-ava.png",
      "gender": "M"
    }
  }
}
```

**Коды ответов:**
- `200` - Успешно создано
- `400` - Ошибка валидации данных
- `401` - Неавторизован
- `422` - Ошибка валидации полей

---

### 3. Обновить персону
```http
PUT /api/aulet/my/update/{person_id}
```

**Описание:** Обновляет данные и связи существующей персоны.

**Параметры URL:**
- `person_id` (int) - ID персоны для обновления

**Заголовки:**
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Тело запроса:**
```json
{
  "person_id": 1,
  "data": {
    "first_name": "Иван",
    "last_name": "Петров",
    "gender": "M",
    "birthday": "1975-05-15",
    "death_date": null,
    "avatar": "custom-avatar.png"
  },
  "rels": {
    "spouses": [2],
    "children": [3],
    "father": null,
    "mother": null
  }
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "rels": {
      "spouses": ["2"],
      "children": ["3"]
    },
    "data": {
      "first name": "Иван",
      "last name": "Петров",
      "birthday": "1975-05-15",
      "avatar": "custom-avatar.png",
      "gender": "M"
    }
  }
}
```

**Коды ответов:**
- `200` - Успешно обновлено
- `400` - Ошибка валидации данных
- `401` - Неавторизован
- `404` - Персона не найдена

---

### 4. Удалить персону
```http
DELETE /api/aulet/my/delete/{person_id}
```

**Описание:** Выполняет мягкое удаление персоны (помечает как удаленную).

**Параметры URL:**
- `person_id` (int) - ID персоны для удаления

**Заголовки:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Ответ:**
```json
{
  "success": true,
  "data": true
}
```

**Коды ответов:**
- `200` - Успешно удалено
- `401` - Неавторизован
- `404` - Персона не найдена

---

## Примеры использования

### Создание семьи: отец → мать → ребенок

#### 1. Создание отца
```bash
curl -X POST "http://localhost:8000/api/aulet/my/create" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "data": {
      "first_name": "Иван",
      "last_name": "Петров",
      "gender": "M",
      "birthday": "1975-05-15",
      "death_date": null,
      "avatar": null
    },
    "rels": {
      "spouses": [],
      "children": [],
      "father": null,
      "mother": null
    }
  }'
```

#### 2. Создание матери (супруги отца)
```bash
curl -X POST "http://localhost:8000/api/aulet/my/create" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "data": {
      "first_name": "Мария",
      "last_name": "Петрова",
      "gender": "F",
      "birthday": "1978-03-20",
      "death_date": null,
      "avatar": null
    },
    "rels": {
      "spouses": [1],
      "children": [],
      "father": null,
      "mother": null
    }
  }'
```

#### 3. Создание ребенка
```bash
curl -X POST "http://localhost:8000/api/aulet/my/create" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "data": {
      "first_name": "Александр",
      "last_name": "Петров",
      "gender": "M",
      "birthday": "2005-12-10",
      "death_date": null,
      "avatar": null
    },
    "rels": {
      "spouses": [],
      "children": [],
      "father": 1,
      "mother": 2
    }
  }'
```

### Интеграция с family-chart

```javascript
import { FamilyChart } from 'family-chart';

// Получение данных семейного дерева
const response = await fetch('/api/aulet/my', {
  headers: {
    'Authorization': `Bearer ${jwt_token}`
  }
});

const result = await response.json();
const familyData = result.data;

// Инициализация family-chart
const familyChart = new FamilyChart(familyData, {
  // настройки библиотеки
  target: '#family-tree-container',
  // другие опции
});
```

---

## Логика связей

### Автоматические связи
Система автоматически создает двунаправленные связи:

1. **Супружеские связи:** При указании супруга у одной персоны, автоматически создается обратная связь
2. **Родительские связи:** При указании родителей у ребенка, он автоматически добавляется в список детей родителей
3. **Детские связи:** При указании детей у родителя, у детей автоматически устанавливается связь с родителем

### Типы связей в базе данных
- `spouses` - супружеские связи
- `children` - связи родитель→ребенок  
- `father` - связь ребенок→отец
- `mother` - связь ребенок→мать

---

## Обработка ошибок

### Общие ошибки

**401 Unauthorized**
```json
{
  "status": "error",
  "data": {
    "detail": "Неверный токен авторизации"
  }
}
```

**400 Bad Request**
```json
{
  "status": "error", 
  "data": {
    "detail": "Ошибка создания персоны: <детали ошибки>"
  }
}
```

**404 Not Found**
```json
{
  "status": "error",
  "data": {
    "detail": "Персона не найдена"
  }
}
```

**422 Validation Error**
```json
{
  "status": "error",
  "data": {
    "detail": [
      {
        "loc": ["data", "gender"],
        "msg": "field required",
        "type": "value_error.missing"
      }
    ]
  }
}
```

---

## Лучшие практики

### 1. Порядок создания
Рекомендуется создавать персон в следующем порядке:
1. Родители
2. Супружеские связи
3. Дети

### 2. Управление связями
- Используйте реальные ID персон в связях
- Проверяйте существование персон перед созданием связей
- Помните о двунаправленности связей

### 3. Аватары
- Если аватар не указан, используется `def-ava.png`
- Поддерживаются относительные и абсолютные URL

### 4. Даты
- Используйте формат `YYYY-MM-DD` для дат
- `death_date` может быть `null` для живых персон

---

## Безопасность

### Авторизация
Все endpoints требуют JWT токен в заголовке:
```
Authorization: Bearer <your_jwt_token>
```

### Изоляция данных
- Каждый пользователь видит только свои семейные деревья
- `user_id` извлекается из JWT токена автоматически

### Мягкое удаление
- Персоны не удаляются физически из базы данных
- Помечаются флагом `is_deleted=true`
- Все связи с удаленной персоной также удаляются

---

## Техническая информация

### Модели данных

**Aulet (Персона):**
- `id` - уникальный идентификатор
- `user_id` - ID пользователя  
- `first_name` - имя
- `last_name` - фамилия
- `gender` - пол (enum: M/F)
- `birthday` - дата рождения
- `death_date` - дата смерти (nullable)
- `avatar` - аватар (nullable)
- `is_deleted` - флаг удаления
- `created_at` - дата создания
- `updated_at` - дата обновления

**AuletRelation (Связи):**
- `id` - уникальный идентификатор
- `type` - тип связи (enum: father/mother/children/spouses)
- `node_id` - ID основной персоны
- `related_node_id` - ID связанной персоны
- `created_at` - дата создания
- `updated_at` - дата обновления

### Сервисные методы

**AuletService:**
- `get_aulet_tree(user_id)` - получение дерева
- `create_aulet_person(user_id, person)` - создание персоны
- `update_aulet_person(user_id, person_update)` - обновление персоны
- `delete_aulet_person(user_id, person_id)` - удаление персоны
- `_get_gender_value(gender)` - безопасное получение значения пола

---

## Версионность

**Текущая версия:** 1.0  
**Совместимость:** family-chart library  
**Дата последнего обновления:** 2024

---

## Поддержка

При возникновении проблем:
1. Проверьте корректность JWT токена
2. Убедитесь в правильности структуры данных
3. Проверьте существование связанных персон
4. Обратитесь к логам сервера для детальной диагностики 