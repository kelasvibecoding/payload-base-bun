# Using Local API Operations with Server Functions

In Next.js, server functions (previously called server actions) are special functions that run exclusively on the server, enabling secure backend logic execution while being callable from the frontend. These functions bridge the gap between client and server, allowing frontend components to perform backend operations without exposing sensitive logic.

## Why Use Server Functions?

- **Executing Backend Logic from the Frontend**: The Local API is designed for server environments and cannot be directly accessed from client-side code. Server functions enable frontend components to trigger backend operations securely.
- **Security Benefits**: Instead of exposing a full REST or GraphQL API, server functions restrict access to only the necessary operations, reducing potential security risks.
- **Performance Optimizations**: Next.js handles server functions efficiently, offering benefits like caching, optimized database queries, and reduced network overhead compared to traditional API calls.
- **Simplified Development Workflow**: Rather than setting up full API routes with authentication and authorization checks, server functions allow for lightweight, direct execution of necessary operations.

## When to Use Server Functions

Use server functions whenever you need to call Local API operations from the frontend. Since the Local API is only accessible from the backend, server functions act as a secure bridge, eliminating the need to expose additional API endpoints.

## Examples

### Creating a Document

First, let's create our server function:

```typescript
'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function createPost(data) {
  const payload = await getPayload({ config })

  try {
    const post = await payload.create({
      collection: 'posts',
      data,
    })
    return post
  } catch (error) {
    throw new Error(`Error creating post: ${error.message}`)
  }
}
```

Now, let's call the `createPost` function from the frontend:

```tsx
'use client';

import React, { useState } from 'react';
import { createPost } from '../server/actions';

export const PostForm: React.FC = () => {
  const [result, setResult] = useState<string>('');

  return (
    <>
      <p>{result}</p>

      <button
        type="button"
        onClick={async () => {
          const newPost = await createPost({ title: 'Sample Post' });
          setResult('Post created: ' + newPost.title);
        }}
      >
        Create Post
      </button>
    </>
  );
};
```

### Updating a Document

Here's the server function to update a document:

```typescript
'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function updatePost(id, data) {
  const payload = await getPayload({ config })

  try {
    const post = await payload.update({
      collection: 'posts',
      id,
      data,
    })
    return post
  } catch (error) {
    throw new Error(`Error updating post: ${error.message}`)
  }
}
```

Call the `updatePost` function from the frontend:

```tsx
'use client';

import React, { useState } from 'react';
import { updatePost } from '../server/actions';

export const UpdatePostForm: React.FC = () => {
  const [result, setResult] = useState<string>('');

  return (
    <>
      <p>{result}</p>

      <button
        type="button"
        onClick={async () => {
          const updatedPost = await updatePost('your-post-id-123', { title: 'Updated Post' });
          setResult('Post updated: ' + updatedPost.title);
        }}
      >
        Update Post
      </button>
    </>
  );
};
```

### Authenticating a User

Server function to authenticate a user:

```typescript
'use server'

import { headers as getHeaders } from 'next/headers'
import config from '@payload-config'
import { getPayload } from 'payload'

export const authenticateUser = async () => {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  if (user) {
    return { hello: user.email }
  }

  return { hello: 'Not authenticated' }
}
```

Call the authentication function from the frontend:

```tsx
'use client';

import React, { useState } from 'react';
import { authenticateUser } from '../server/actions';

export const AuthComponent: React.FC = () => {
  const [userInfo, setUserInfo] = useState<string>('');

  return (
    <React.Fragment>
      <p>{userInfo}</p>

      <button
        onClick={async () => {
          const result = await authenticateUser();
          setUserInfo(result.hello);
        }}
        type="button"
      >
        Check Authentication
      </button>
    </React.Fragment>
  );
};
```

### Creating a Document with File Upload

Server function for creating a document with file upload:

```typescript
'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function createPostWithUpload(data, upload) {
  const payload = await getPayload({ config })

  try {
    const postData = {
      ...data,
      media: upload,
    }

    const post = await payload.create({
      collection: 'posts',
      data: postData,
    })

    return post
  } catch (error) {
    throw new Error(`Error creating post: ${error.message}`)
  }
}
```

Frontend component with file upload:

```tsx
'use client';

import React, { useState } from 'react';
import { createPostWithUpload } from '../server/actions';

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setResult('Please upload a file.');
      return;
    }

    try {
      const newPost = await createPostWithUpload({ title }, file);
      setResult('Post created with file: ' + newPost.title);
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Create Post</button>
      <p>{result}</p>
    </form>
  );
};
```

## Reusable Payload Server Functions

### Login

```typescript
'use server'

import { login } from '@payloadcms/next/auth'
import config from '@payload-config'

export async function loginAction({
  email,
  password,
}: {
  email: string
  password: string
}) {
  try {
    const result = await login({
      collection: 'users',
      config,
      email,
      password,
    })
    return result
  } catch (error) {
    throw new Error(
      `Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
```

### Logout

```typescript
'use server'

import { logout } from '@payloadcms/next/auth'
import config from '@payload-config'

export async function logoutAction() {
  try {
    return await logout({ allSessions: true, config })
  } catch (error) {
    throw new Error(
      `Logout failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
```

### Refresh

```typescript
'use server'

import { refresh } from '@payloadcms/next/auth'
import config from '@payload-config'

export async function refreshAction() {
  try {
    return await refresh({
      config,
    })
  } catch (error) {
    throw new Error(
      `Refresh failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
```

## Error Handling in Server Functions

**Best Practices:**

- Wrap Local API calls in try/catch blocks to catch potential errors.
- Log errors on the server for debugging purposes.
- Return structured error responses instead of exposing raw errors to the frontend.

**Example:**

```typescript
export async function createPost(data) {
  try {
    const payload = await getPayload({ config })
    return await payload.create({ collection: 'posts', data })
  } catch (error) {
    logger.error('Error creating post:', error)
    return { error: 'Failed to create post' }
  }
}
```

## Security Considerations

**Best Practices:**

- **Restrict access**: Ensure that sensitive actions (like user management) are only callable by authorized users.
- **Avoid passing sensitive data**: Do not return sensitive information such as user data, passwords, etc.
- **Use authentication & authorization**: Check user roles before performing actions.

**Example:**

```typescript
import { UnauthorizedError } from 'payload'

export async function deletePost(postId, user) {
  if (!user || user.role !== 'admin') {
    throw new UnauthorizedError()
  }

  const payload = await getPayload({ config })
  return await payload.delete({ collection: 'posts', id: postId })
}
```
