import { describe, expect, it } from 'vitest'
import { $ElementKind, likec4model } from './likec4-model'

describe('view conventions', () => {
  const views = [...likec4model.views()]

  it('view IDs are kebab-case', () => {
    const re = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/
    const offenders = views.filter(({ id }) => !re.test(id)).map(({ id }) => id)
    failIfExist(offenders, 'views with non-kebab-case IDs')
  })

  it('every view has a description or title', () => {
    const offenders = views.filter(({ title, description }) => !title?.trim() && !description).map(({ id }) => id)
    failIfExist(offenders, 'views without a title or description')
  })
})

describe('element conventions', () => {
  const elements = [...likec4model.elements()]

  it('every (non-obvious) element has a description', () => {
    const offenders = elements
      .filter(e => !isTodo(e))
      .filter(e => !hasDescription(e))
      .map(({ id }) => id)
    failIfExist(offenders, 'elements missing a description')
  })

  it('element name segments are camelCase', () => {
    const re = /^[a-z][a-zA-Z0-9]*$/
    const offenders = elements.filter(({ name }) => !re.test(name)).map(({ id }) => id)
    failIfExist(offenders, 'elements with non-camelCase names')
  })
})

describe('system conventions', () => {
  const activeSystems = ofKind('system').filter(s => !isTodo(s))

  it('every system owned by concrete folks', () => {
    const offenders = activeSystems
      .filter(s => !s.getMetadata('owner'))
      .map(({ id }) => id)
    failIfExist(offenders, 'systems missing metadata.owner')
  })

  it('every system has at least 2 containers (single-container systems are anti-pattern)', () => {
    const offenders = activeSystems
      .filter(s => [...s.descendants()].filter(d => d.isTagged('container')).length < 2)
      .map(({ id }) => id)
    failIfExist(offenders, 'systems with fewer than 2 containers — promote to a peer container or merge')
  })

  it('every system has a scoped view (`view ... of <system>`)', () => {
    const offenders = activeSystems
      .filter(s => s.scopedViews().size === 0)
      .map(({ id }) => id)
    failIfExist(offenders, 'systems without a scoped view — every system needs a container-level view')
  })
})

describe('container conventions', () => {
  const activeContainers = [...likec4model.elementsWhere({ tag: 'container' })].filter(s => !isTodo(s))
  const activeDeployableContainers = ofKind('container').filter(s => !isTodo(s))

  it('every container has a non-empty `technology`', () => {
    const offenders = activeContainers
      .filter(({ technology }) => !technology?.trim())
      .map(({ id }) => id)
    failIfExist(offenders, 'containers without `technology`')
  })

  it('every container has a tech `icon`', () => {
    const offenders = activeContainers
      .filter(({ icon }) => !icon)
      .map(({ id }) => id)
    failIfExist(offenders, 'containers without a tech `icon` — use `icon tech:<name>` (e.g. `tech:spring-icon`, `tech:postgresql`)')
  })

  it('every container links to its repository', () => {
    const offenders = activeDeployableContainers
      .filter(({ links }) => !links.some(({ title }) => title === 'Repository'))
      .map(({ id }) => id)
    failIfExist(offenders, 'containers not linking to `Repository` — each deployable should point at its Git repo')
  })

  it('every container is a direct child of system', () => {
    const offenders = activeContainers
      .filter(({ parent }) => parent?.kind !== 'system')
      .map(({ id }) => id)
    failIfExist(offenders, 'container/database/messaging/bucket must be a direct child of system — not under area/subdomain/domain, and not nested inside another container')
  })
})

describe('component conventions', () => {
  const activeComponents = [...likec4model.elementsWhere({ kind: 'component' })].filter(s => !isTodo(s))

  it('every component is a direct child of container', () => {
    const offenders = activeComponents
      .filter(({ parent }) => !parent?.tags.includes('container'))
      .map(({ id }) => id)
    failIfExist(offenders, 'component must be a direct child of container/database/messaging/bucket')
  })
})

const ofKind = (kind: $ElementKind) => [...likec4model.elementsWhere({ kind })]

const hasDescription = ({ description }: { description?: unknown }) => {
  const d = description as { txt?: string; md?: string } | null | undefined
  return !!d && (!!d.txt?.trim() || !!d.md?.trim())
}

const failIfExist = (offenders: string[], message: string) => {
  const detail = offenders.length ? `\n  - ${offenders.join('\n  - ')}` : ''
  expect(offenders, `${message}${detail}`).toHaveLength(0)
}

// #todo-tagged elements (and any element whose ancestor is #todo) are stubs —
// not yet fully defined. All quality-convention tests skip them.
const isTodo = (e: ReturnType<typeof ofKind>[number]): boolean => {
  if (e.isTagged('todo')) return true
  let p = e.parent
  while (p) {
    if (p.isTagged('todo')) return true
    p = p.parent
  }
  return false
}
