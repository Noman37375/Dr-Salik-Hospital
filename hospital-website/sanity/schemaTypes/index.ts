import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import category from './category'
import doctor from './doctor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, doctor],
}
