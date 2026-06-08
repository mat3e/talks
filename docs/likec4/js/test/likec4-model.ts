/* prettier-ignore-start */
/* eslint-disable */

/******************************************************************************
 * This file was generated
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LikeC4Model } from 'likec4/model'
import type { Aux, SpecAux } from 'likec4/model';

export type $Specs = SpecAux<
  // Element kinds
  | "actor"
  | "bucket"
  | "component"
  | "container"
  | "database"
  | "externalSystem"
  | "messaging"
  | "system",
  // Deployment kinds
  never,
  // Relationship kinds
  | "async",
  // Tags
  | "container"
  | "external"
  | "software-system"
  | "todo",
  // Metadata keys
  | "owner"
>

export type $Aux = Aux<
  "layouted",
  // Elements
  | "ft"
  | "user"
  | "ft.houseEvents"
  | "ft.monolith"
  | "ft.pigs3"
  | "ft.pigs3db"
  | "ft.redhood"
  | "ft.redhoodDb"
  | "ft.wolfEvents"
  | "ft.pigs3.blowing"
  | "ft.pigs3.building"
  | "ft.pigs3.cli"
  | "ft.pigs3.command"
  | "ft.pigs3.event"
  | "ft.pigs3.factory"
  | "ft.pigs3.house"
  | "ft.pigs3.query"
  | "ft.pigs3.repo"
  | "ft.pigs3.rest"
  | "ft.pigs3.wolf"
  | "ft.redhood.meeting"
  | "ft.redhood.query"
  | "ft.redhood.repo"
  | "ft.redhood.rest"
  | "ft.redhood.service"
  | "ft.redhood.wolf",
  // Deployments
  never,
  // Views
  | "fairy-tales-index"
  | "index"
  | "pigs3-index"
  | "redhood-index"
  | "wolf-lifecycle",
  // Project ID
  "fairytales-c4",
  $Specs
>

export type $ElementId = $Aux['ElementId']
export type $DeploymentId = $Aux['DeploymentId']
export type $ViewId = $Aux['ViewId']

export type $ElementKind = $Aux['ElementKind']
export type $RelationKind = $Aux['RelationKind']
export type $DeploymentKind = $Aux['DeploymentKind']
export type $Tag = $Aux['Tag']
export type $Tags = readonly $Aux['Tag'][]
export type $MetadataKey = $Aux['MetadataKey']


export const likec4model: LikeC4Model<$Aux> = new LikeC4Model({
  _stage: 'layouted',
  projectId: 'fairytales-c4',
  project: {
    id: 'fairytales-c4',
    title: 'Fairy tales C4 model',
  },
  specification: {
    tags: {
      container: {
        color: 'tomato',
      },
      external: {
        color: '#9e9e9eff',
      },
      'software-system': {
        color: 'grass',
      },
      todo: {
        color: 'blue',
      },
    },
    elements: {
      actor: {
        notation: 'Person',
        style: {
          shape: 'person',
          color: 'green',
        },
      },
      externalSystem: {
        notation: 'External Software System',
        tags: [
          'software-system',
          'external',
        ],
        style: {},
      },
      system: {
        notation: 'Software System',
        tags: [
          'software-system',
        ],
        style: {},
      },
      container: {
        notation: 'Container',
        tags: [
          'container',
        ],
        style: {},
      },
      messaging: {
        notation: 'Messaging System',
        tags: [
          'container',
        ],
        style: {
          shape: 'queue',
        },
      },
      database: {
        notation: 'Database',
        tags: [
          'container',
        ],
        style: {
          shape: 'storage',
        },
      },
      bucket: {
        notation: 'Bucket',
        tags: [
          'container',
        ],
        style: {
          shape: 'bucket',
        },
      },
      component: {
        style: {
          shape: 'component',
        },
      },
    },
    relationships: {
      async: {
        style: {
          line: 'dotted',
          head: 'open',
        },
      },
    },
    deployments: {},
    metadataKeys: [
      'owner',
    ],
    customColors: {},
  },
  elements: {
    user: {
      notation: 'Person',
      style: {
        shape: 'person',
        color: 'green',
      },
      summary: {
        txt: 'The one who wants to read fairy tales',
      },
      title: 'User',
      kind: 'actor',
      id: 'user',
    },
    ft: {
      metadata: {
        owner: 'mat3e',
      },
      notation: 'Software System',
      style: {},
      tags: [
        'software-system',
      ],
      summary: {
        txt: 'System for interacting with The Three Little Pigs or Little Red Riding Hood',
      },
      title: 'Fairy Tales',
      kind: 'system',
      id: 'ft',
    },
    'ft.monolith': {
      notation: 'Container',
      style: {
        icon: 'tech:spring-icon',
      },
      links: [
        {
          url: 'https://github.com/mat3e/3pigs-ddd/',
          title: 'Repository',
        },
      ],
      tags: [
        'container',
      ],
      summary: {
        txt: 'Entry point to the system, when CLI or HTTP mode can be chosen',
      },
      technology: 'Spring',
      title: 'Spring App',
      kind: 'container',
      id: 'ft.monolith',
    },
    'ft.pigs3': {
      notation: 'Container',
      style: {
        icon: 'tech:java',
      },
      links: [
        {
          url: 'https://github.com/mat3e/3pigs-ddd/',
          title: 'Repository',
        },
      ],
      tags: [
        'container',
      ],
      technology: 'Java',
      description: {
        txt: 'A fairy tale about pigs building their houses',
      },
      title: 'The Three Little Pigs',
      kind: 'container',
      id: 'ft.pigs3',
    },
    'ft.pigs3db': {
      notation: 'Database',
      style: {
        shape: 'storage',
        icon: 'tech:mysql-icon',
      },
      tags: [
        'container',
      ],
      summary: {
        txt: 'DB schema - houses',
      },
      technology: 'Mysql',
      title: 'The Three Little Pigs H2 Database',
      kind: 'database',
      id: 'ft.pigs3db',
    },
    'ft.redhood': {
      notation: 'Container',
      style: {
        icon: 'tech:java',
      },
      links: [
        {
          url: 'https://github.com/mat3e/3pigs-ddd/',
          title: 'Repository',
        },
      ],
      tags: [
        'container',
      ],
      summary: {
        txt: 'A fairy tale about listening to your mom, and not interacting with strangers',
      },
      technology: 'Java',
      title: 'Little Red Riding Hood',
      kind: 'container',
      id: 'ft.redhood',
    },
    'ft.redhoodDb': {
      notation: 'Database',
      style: {
        shape: 'storage',
        icon: 'tech:mysql-icon',
      },
      tags: [
        'container',
      ],
      summary: {
        txt: 'DB schema - wolfs',
      },
      technology: 'Mysql',
      title: 'Little Red Riding Hood H2 Database',
      kind: 'database',
      id: 'ft.redhoodDb',
    },
    'ft.houseEvents': {
      notation: 'Messaging System',
      style: {
        shape: 'queue',
        icon: 'tech:spring-icon',
      },
      tags: [
        'container',
      ],
      summary: {
        txt: 'Spring way of exchanging HouseEvents',
      },
      technology: 'Spring',
      title: 'In-memory house events',
      kind: 'messaging',
      id: 'ft.houseEvents',
    },
    'ft.wolfEvents': {
      notation: 'Messaging System',
      style: {
        shape: 'queue',
        icon: 'tech:spring-icon',
      },
      tags: [
        'container',
      ],
      summary: {
        txt: 'Spring way of exchanging WolfEvents',
      },
      technology: 'Spring',
      title: 'In-memory wolf events',
      kind: 'messaging',
      id: 'ft.wolfEvents',
    },
    'ft.pigs3.cli': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Runner printing a fairy tale in console',
      },
      title: 'Command-Line Runner',
      kind: 'component',
      id: 'ft.pigs3.cli',
    },
    'ft.pigs3.rest': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'HTTP endpoints for interacting with houses',
      },
      title: 'REST Controller',
      kind: 'component',
      id: 'ft.pigs3.rest',
    },
    'ft.pigs3.command': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'App logic for driving domain logic',
      },
      title: 'Command Handler',
      kind: 'component',
      id: 'ft.pigs3.command',
    },
    'ft.pigs3.event': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Executes commands based on incoming events',
      },
      title: 'Event Handler',
      kind: 'component',
      id: 'ft.pigs3.event',
    },
    'ft.pigs3.query': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Allows to find closest houses and read models',
      },
      title: 'Query Repository',
      kind: 'component',
      id: 'ft.pigs3.query',
    },
    'ft.pigs3.wolf': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Stateless work on house, encapsulating retrying logic',
      },
      title: 'Wolf Service',
      kind: 'component',
      id: 'ft.pigs3.wolf',
    },
    'ft.pigs3.factory': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Domain factory for creating house aggregate',
      },
      title: 'House Factory',
      kind: 'component',
      id: 'ft.pigs3.factory',
    },
    'ft.pigs3.repo': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Allows to find by ID and save houses',
      },
      title: 'Repository',
      kind: 'component',
      id: 'ft.pigs3.repo',
    },
    'ft.pigs3.blowing': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Rules on when house can be destroyed by blowing',
      },
      title: 'Blowing Down Specification',
      kind: 'component',
      id: 'ft.pigs3.blowing',
    },
    'ft.pigs3.building': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Rules on how to build house depending on the character of a pig',
      },
      title: 'Building Policy',
      kind: 'component',
      id: 'ft.pigs3.building',
    },
    'ft.pigs3.house': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'DDD aggregate protecting rules about destroying and pig changes',
      },
      title: 'House Aggregate',
      kind: 'component',
      id: 'ft.pigs3.house',
    },
    'ft.redhood.rest': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'HTTP endpoints for meeting and interacting with wolfs',
      },
      title: 'REST Controller',
      kind: 'component',
      id: 'ft.redhood.rest',
    },
    'ft.redhood.service': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Allows to create wolf, introduce people to wolf, and act on wolf death',
      },
      title: 'Service',
      kind: 'component',
      id: 'ft.redhood.service',
    },
    'ft.redhood.query': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Allows to get wolf and its eaten people',
      },
      title: 'Query Repository',
      kind: 'component',
      id: 'ft.redhood.query',
    },
    'ft.redhood.repo': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Allows to find by ID, save, and delete wolfs',
      },
      title: 'Repository',
      kind: 'component',
      id: 'ft.redhood.repo',
    },
    'ft.redhood.wolf': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Plans whom to meet, meets and eats people, can die from a bad meeitng',
      },
      title: 'Wolf',
      kind: 'component',
      id: 'ft.redhood.wolf',
    },
    'ft.redhood.meeting': {
      style: {
        shape: 'component',
      },
      summary: {
        txt: 'Provides consequences for wolf and person',
      },
      title: 'Meeting Policy',
      kind: 'component',
      id: 'ft.redhood.meeting',
    },
  },
  relations: {
    '1h6u16z': {
      title: 'interacts with',
      source: {
        model: 'user',
      },
      target: {
        model: 'ft.monolith',
      },
      id: '1h6u16z',
    },
    sfdtp0: {
      title: 'starts',
      source: {
        model: 'ft.monolith',
      },
      target: {
        model: 'ft.pigs3.cli',
      },
      id: 'sfdtp0',
    },
    vlcyf7: {
      title: 'interacts in HTTP mode via',
      source: {
        model: 'ft.monolith',
      },
      target: {
        model: 'ft.pigs3.rest',
      },
      id: 'vlcyf7',
    },
    '1l8dxr6': {
      title: 'interacts in HTTP mode via',
      source: {
        model: 'ft.monolith',
      },
      target: {
        model: 'ft.redhood.rest',
      },
      id: '1l8dxr6',
    },
    '1438yba': {
      title: 'executes commands in order',
      source: {
        model: 'ft.pigs3.cli',
      },
      target: {
        model: 'ft.pigs3.command',
      },
      id: '1438yba',
    },
    '1nhkxlt': {
      title: 'creates/deletes houses via',
      source: {
        model: 'ft.pigs3.rest',
      },
      target: {
        model: 'ft.pigs3.command',
      },
      id: '1nhkxlt',
    },
    '1mb8ujx': {
      title: 'reads houses via',
      source: {
        model: 'ft.pigs3.rest',
      },
      target: {
        model: 'ft.pigs3.query',
      },
      id: '1mb8ujx',
    },
    '1vkotia': {
      title: 'creates new houses via',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.factory',
      },
      id: '1vkotia',
    },
    drhknn: {
      title: 'changes pigs in',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.house',
      },
      id: 'drhknn',
    },
    '1trm4au': {
      title: 'destroys houses with',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.wolf',
      },
      id: '1trm4au',
    },
    '5gyi71': {
      title: 'reads and updates on diff via',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.repo',
      },
      id: '5gyi71',
    },
    ibams6: {
      title: 'finds house to escape via',
      source: {
        model: 'ft.pigs3.event',
      },
      target: {
        model: 'ft.pigs3.query',
      },
      id: 'ibams6',
    },
    bivr96: {
      title: 'calls',
      source: {
        model: 'ft.pigs3.event',
      },
      target: {
        model: 'ft.pigs3.command',
      },
      id: 'bivr96',
    },
    '1ob520l': {
      line: 'dotted',
      head: 'open',
      title: 'triggers',
      source: {
        model: 'ft.houseEvents',
      },
      target: {
        model: 'ft.pigs3.event',
      },
      kind: 'async',
      id: '1ob520l',
    },
    '1m16pn5': {
      title: 'selects from',
      source: {
        model: 'ft.pigs3.query',
      },
      target: {
        model: 'ft.pigs3db',
      },
      id: '1m16pn5',
    },
    zi1jl0: {
      title: 'tries to destroy',
      source: {
        model: 'ft.pigs3.wolf',
      },
      target: {
        model: 'ft.pigs3.house',
      },
      id: 'zi1jl0',
    },
    ete0mv: {
      title: 'follows',
      source: {
        model: 'ft.pigs3.wolf',
      },
      target: {
        model: 'ft.pigs3.blowing',
      },
      id: 'ete0mv',
    },
    '8g9weh': {
      line: 'dotted',
      head: 'open',
      title: 'informs when quitting',
      source: {
        model: 'ft.pigs3.wolf',
      },
      target: {
        model: 'ft.houseEvents',
      },
      kind: 'async',
      id: '8g9weh',
    },
    '14s2prz': {
      title: 'follows',
      source: {
        model: 'ft.pigs3.factory',
      },
      target: {
        model: 'ft.pigs3.building',
      },
      id: '14s2prz',
    },
    '1csnvik': {
      title: 'creates',
      source: {
        model: 'ft.pigs3.factory',
      },
      target: {
        model: 'ft.pigs3.house',
      },
      id: '1csnvik',
    },
    '1f0qxjk': {
      title: 'saves',
      source: {
        model: 'ft.pigs3.repo',
      },
      target: {
        model: 'ft.pigs3.house',
      },
      id: '1f0qxjk',
    },
    '1fqpzn5': {
      title: 'reads',
      source: {
        model: 'ft.pigs3.repo',
      },
      target: {
        model: 'ft.pigs3.house',
      },
      id: '1fqpzn5',
    },
    '1s78fry': {
      title: 'select, insert, update',
      source: {
        model: 'ft.pigs3.repo',
      },
      target: {
        model: 'ft.pigs3db',
      },
      id: '1s78fry',
    },
    t14e15: {
      line: 'dotted',
      head: 'open',
      title: 'informs about refugees',
      source: {
        model: 'ft.pigs3.house',
      },
      target: {
        model: 'ft.houseEvents',
      },
      kind: 'async',
      id: 't14e15',
    },
    rzuezc: {
      title: 'creates and meets wolf via',
      source: {
        model: 'ft.redhood.rest',
      },
      target: {
        model: 'ft.redhood.service',
      },
      id: 'rzuezc',
    },
    '1dk8uvi': {
      title: 'reads wolfs via',
      source: {
        model: 'ft.redhood.rest',
      },
      target: {
        model: 'ft.redhood.query',
      },
      id: '1dk8uvi',
    },
    '3o7wbn': {
      title: 'finds, updates, deletes',
      source: {
        model: 'ft.redhood.service',
      },
      target: {
        model: 'ft.redhood.repo',
      },
      id: '3o7wbn',
    },
    '10en3so': {
      title: 'orchestrates domain logic in',
      source: {
        model: 'ft.redhood.service',
      },
      target: {
        model: 'ft.redhood.wolf',
      },
      id: '10en3so',
    },
    oi9w9h: {
      line: 'dotted',
      head: 'open',
      title: 'informs when wolf killed',
      source: {
        model: 'ft.redhood.service',
      },
      target: {
        model: 'ft.wolfEvents',
      },
      kind: 'async',
      id: 'oi9w9h',
    },
    '1mf6tuc': {
      line: 'dotted',
      head: 'open',
      title: 'triggers',
      source: {
        model: 'ft.wolfEvents',
      },
      target: {
        model: 'ft.redhood.service',
      },
      kind: 'async',
      id: '1mf6tuc',
    },
    '1mtkvth': {
      title: 'selects from',
      source: {
        model: 'ft.redhood.query',
      },
      target: {
        model: 'ft.redhoodDb',
      },
      id: '1mtkvth',
    },
    mpowqy: {
      title: 'reads, saves',
      source: {
        model: 'ft.redhood.repo',
      },
      target: {
        model: 'ft.redhood.wolf',
      },
      id: 'mpowqy',
    },
    '1ytfpzl': {
      title: 'select, insert, update, delete',
      source: {
        model: 'ft.redhood.repo',
      },
      target: {
        model: 'ft.redhoodDb',
      },
      id: '1ytfpzl',
    },
    '1uv3b7e': {
      title: 'run meetings according to plan and met person',
      source: {
        model: 'ft.redhood.wolf',
      },
      target: {
        model: 'ft.redhood.meeting',
      },
      id: '1uv3b7e',
    },
  },
  globals: {
    predicates: {
      solidNonAsyncRel: [
        {
          include: [
            {
              customRelation: {
                line: 'solid',
                expr: {
                  where: {
                    expr: {
                      source: {
                        wildcard: true,
                      },
                      target: {
                        wildcard: true,
                      },
                      isBidirectional: false,
                    },
                    condition: {
                      kind: {
                        neq: 'async',
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      ],
      pigs3containers: [
        {
          include: [
            {
              custom: {
                expr: {
                  ref: {
                    model: 'ft.houseEvents',
                  },
                },
                color: 'secondary',
              },
            },
            {
              custom: {
                expr: {
                  ref: {
                    model: 'ft.pigs3',
                  },
                },
                color: 'secondary',
              },
            },
            {
              custom: {
                expr: {
                  ref: {
                    model: 'ft.pigs3db',
                  },
                },
                color: 'secondary',
              },
            },
          ],
        },
      ],
      redhoodContainers: [
        {
          include: [
            {
              custom: {
                expr: {
                  ref: {
                    model: 'ft.wolfEvents',
                  },
                },
                color: 'secondary',
              },
            },
            {
              custom: {
                expr: {
                  ref: {
                    model: 'ft.redhood',
                  },
                },
                color: 'secondary',
              },
            },
            {
              custom: {
                expr: {
                  ref: {
                    model: 'ft.redhoodDb',
                  },
                },
                color: 'secondary',
              },
            },
          ],
        },
      ],
    },
    dynamicPredicates: {},
    styles: {
      mute_all: [
        {
          targets: [
            {
              wildcard: true,
            },
          ],
          style: {
            color: 'muted',
            opacity: 10,
          },
        },
      ],
    },
  },
  views: {
    index: {
      _type: 'element',
      tags: null,
      links: null,
      _stage: 'layouted',
      sourcePath: 'views.c4',
      description: null,
      title: 'Context',
      id: 'index',
      autoLayout: {
        direction: 'TB',
      },
      notation: {
        nodes: [
          {
            title: 'Person',
            shape: 'person',
            color: 'green',
            kinds: [
              'actor',
            ],
          },
          {
            title: 'Software System',
            shape: 'rectangle',
            color: 'primary',
            kinds: [
              'system',
            ],
          },
        ],
      },
      hash: 'tEEfBUWBBpIIAm_McgG71XyrrZlYAJ8VO1sI8lCq_hc',
      bounds: {
        x: 0,
        y: 0,
        width: 325,
        height: 503,
      },
      nodes: [
        {
          id: 'user',
          parent: null,
          level: 0,
          children: [],
          inEdges: [],
          outEdges: [
            '1uutfah',
          ],
          title: 'User',
          modelRef: 'user',
          shape: 'person',
          color: 'green',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'The one who wants to read fairy tales',
          },
          tags: [],
          notation: 'Person',
          kind: 'actor',
          x: 3,
          y: 0,
          width: 320,
          height: 180,
          labelBBox: {
            x: 33,
            y: 65,
            width: 253,
            height: 47,
          },
        },
        {
          id: 'ft',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            '1uutfah',
          ],
          outEdges: [],
          title: 'Fairy Tales',
          modelRef: 'ft',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'System for interacting with The Three Little Pigs or Little Red Riding Hood',
          },
          tags: [
            'software-system',
          ],
          metadata: {
            owner: 'mat3e',
          },
          notation: 'Software System',
          kind: 'system',
          navigateTo: 'fairy-tales-index',
          x: 0,
          y: 323,
          width: 325,
          height: 180,
          labelBBox: {
            x: 18,
            y: 56,
            width: 289,
            height: 65,
          },
        },
      ],
      edges: [
        {
          id: '1uutfah',
          source: 'user',
          target: 'ft',
          label: 'interacts with',
          points: [
            [
              163,
              180,
            ],
            [
              163,
              221,
            ],
            [
              163,
              270,
            ],
            [
              163,
              313,
            ],
          ],
          labelBBox: {
            x: 164,
            y: 241,
            width: 86,
            height: 18,
          },
          parent: null,
          relations: [
            '1h6u16z',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
      ],
    },
    'fairy-tales-index': {
      _type: 'element',
      tags: null,
      links: null,
      viewOf: 'ft',
      _stage: 'layouted',
      sourcePath: 'views.c4',
      description: null,
      title: 'C4 / Containers',
      id: 'fairy-tales-index',
      autoLayout: {
        direction: 'TB',
      },
      notation: {
        nodes: [
          {
            title: 'Person',
            shape: 'person',
            color: 'green',
            kinds: [
              'actor',
            ],
          },
          {
            title: 'Messaging System',
            shape: 'queue',
            color: 'primary',
            kinds: [
              'messaging',
            ],
          },
          {
            title: 'Container',
            shape: 'rectangle',
            color: 'primary',
            kinds: [
              'container',
            ],
          },
          {
            title: 'Software System',
            shape: 'rectangle',
            color: 'primary',
            kinds: [
              'system',
            ],
          },
          {
            title: 'Database',
            shape: 'storage',
            color: 'primary',
            kinds: [
              'database',
            ],
          },
        ],
      },
      hash: 'ao6JCX_VAJIl4Gl7PSYhfXs5evO_YYuZeNAOqdKcIa8',
      bounds: {
        x: 0,
        y: 0,
        width: 2063,
        height: 1206,
      },
      nodes: [
        {
          id: 'user',
          parent: null,
          level: 0,
          children: [],
          inEdges: [],
          outEdges: [
            '1k9jmjh',
          ],
          title: 'User',
          modelRef: 'user',
          shape: 'person',
          color: 'green',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'The one who wants to read fairy tales',
          },
          tags: [],
          notation: 'Person',
          kind: 'actor',
          x: 948,
          y: 0,
          width: 320,
          height: 180,
          labelBBox: {
            x: 33,
            y: 65,
            width: 253,
            height: 47,
          },
        },
        {
          id: 'ft',
          parent: null,
          level: 0,
          children: [
            'ft.monolith',
            'ft.pigs3',
            'ft.redhood',
            'ft.pigs3db',
            'ft.houseEvents',
            'ft.redhoodDb',
            'ft.wolfEvents',
          ],
          inEdges: [
            '1k9jmjh',
          ],
          outEdges: [],
          title: 'Fairy Tales',
          modelRef: 'ft',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'System for interacting with The Three Little Pigs or Little Red Riding Hood',
          },
          tags: [
            'software-system',
          ],
          metadata: {
            owner: 'mat3e',
          },
          notation: 'Software System',
          kind: 'system',
          depth: 1,
          x: 8,
          y: 271,
          width: 2047,
          height: 927,
          labelBBox: {
            x: 6,
            y: 0,
            width: 76,
            height: 15,
          },
        },
        {
          id: 'ft.monolith',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1k9jmjh',
          ],
          outEdges: [
            '1ohg55a',
            '30c1jj',
          ],
          title: 'Spring App',
          modelRef: 'ft.monolith',
          shape: 'rectangle',
          color: 'primary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Entry point to the system, when CLI or HTTP mode can be chosen',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Spring',
          kind: 'container',
          x: 928,
          y: 332,
          width: 360,
          height: 180,
          labelBBox: {
            x: 46,
            y: 46,
            width: 298,
            height: 85,
          },
        },
        {
          id: 'ft.pigs3',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1ohg55a',
            '3em6xb',
          ],
          outEdges: [
            'ri5218',
            '13kzqr3',
          ],
          title: 'The Three Little Pigs',
          modelRef: 'ft.pigs3',
          shape: 'rectangle',
          color: 'primary',
          icon: 'tech:java',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'A fairy tale about pigs building their houses',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Java',
          kind: 'container',
          navigateTo: 'pigs3-index',
          x: 722,
          y: 655,
          width: 324,
          height: 180,
          labelBBox: {
            x: 46,
            y: 46,
            width: 262,
            height: 85,
          },
        },
        {
          id: 'ft.redhood',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '30c1jj',
            '1nxnqjc',
          ],
          outEdges: [
            '18d872k',
            'oed4u0',
          ],
          title: 'Little Red Riding Hood',
          modelRef: 'ft.redhood',
          shape: 'rectangle',
          color: 'primary',
          icon: 'tech:java',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'A fairy tale about listening to your mom, and not interacting with strangers',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Java',
          kind: 'container',
          navigateTo: 'redhood-index',
          x: 1156,
          y: 655,
          width: 353,
          height: 180,
          labelBBox: {
            x: 46,
            y: 37,
            width: 292,
            height: 103,
          },
        },
        {
          id: 'ft.pigs3db',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            'ri5218',
          ],
          outEdges: [],
          title: 'The Three Little Pigs H2 Database',
          modelRef: 'ft.pigs3db',
          shape: 'storage',
          color: 'primary',
          icon: 'tech:mysql-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'DB schema - houses',
          },
          tags: [
            'container',
          ],
          notation: 'Database',
          technology: 'Mysql',
          kind: 'database',
          x: 48,
          y: 978,
          width: 430,
          height: 180,
          labelBBox: {
            x: 46,
            y: 55,
            width: 368,
            height: 66,
          },
        },
        {
          id: 'ft.houseEvents',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '13kzqr3',
          ],
          outEdges: [
            '3em6xb',
          ],
          title: 'In-memory house events',
          modelRef: 'ft.houseEvents',
          shape: 'queue',
          color: 'primary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Spring way of exchanging HouseEvents',
          },
          tags: [
            'container',
          ],
          notation: 'Messaging System',
          technology: 'Spring',
          kind: 'messaging',
          x: 589,
          y: 982,
          width: 364,
          height: 172,
          labelBBox: {
            x: 56,
            y: 42,
            width: 292,
            height: 84,
          },
        },
        {
          id: 'ft.redhoodDb',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '18d872k',
          ],
          outEdges: [],
          title: 'Little Red Riding Hood H2 Database',
          modelRef: 'ft.redhoodDb',
          shape: 'storage',
          color: 'primary',
          icon: 'tech:mysql-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'DB schema - wolfs',
          },
          tags: [
            'container',
          ],
          notation: 'Database',
          technology: 'Mysql',
          kind: 'database',
          x: 1063,
          y: 978,
          width: 446,
          height: 180,
          labelBBox: {
            x: 46,
            y: 55,
            width: 384,
            height: 66,
          },
        },
        {
          id: 'ft.wolfEvents',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            'oed4u0',
          ],
          outEdges: [
            '1nxnqjc',
          ],
          title: 'In-memory wolf events',
          modelRef: 'ft.wolfEvents',
          shape: 'queue',
          color: 'primary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Spring way of exchanging WolfEvents',
          },
          tags: [
            'container',
          ],
          notation: 'Messaging System',
          technology: 'Spring',
          kind: 'messaging',
          x: 1619,
          y: 982,
          width: 395,
          height: 172,
          labelBBox: {
            x: 56,
            y: 51,
            width: 324,
            height: 66,
          },
        },
      ],
      edges: [
        {
          id: '1k9jmjh',
          source: 'user',
          target: 'ft.monolith',
          label: 'interacts with',
          points: [
            [
              1108,
              180,
            ],
            [
              1108,
              224,
            ],
            [
              1108,
              277,
            ],
            [
              1108,
              322,
            ],
          ],
          labelBBox: {
            x: 1109,
            y: 241,
            width: 86,
            height: 18,
          },
          parent: null,
          relations: [
            '1h6u16z',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1ohg55a',
          source: 'ft.monolith',
          target: 'ft.pigs3',
          label: '[...]',
          points: [
            [
              1046,
              512,
            ],
            [
              1017,
              554,
            ],
            [
              982,
              604,
            ],
            [
              952,
              647,
            ],
          ],
          labelBBox: {
            x: 1004,
            y: 571,
            width: 25,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'sfdtp0',
            'vlcyf7',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '30c1jj',
          source: 'ft.monolith',
          target: 'ft.redhood',
          label: 'interacts in HTTP mode via',
          points: [
            [
              1170,
              512,
            ],
            [
              1200,
              554,
            ],
            [
              1235,
              604,
            ],
            [
              1265,
              647,
            ],
          ],
          labelBBox: {
            x: 1228,
            y: 573,
            width: 173,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1l8dxr6',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'ri5218',
          source: 'ft.pigs3',
          target: 'ft.pigs3db',
          label: '[...]',
          points: [
            [
              722,
              829,
            ],
            [
              635,
              874,
            ],
            [
              528,
              930,
            ],
            [
              439,
              976,
            ],
          ],
          labelBBox: {
            x: 593,
            y: 893,
            width: 25,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1m16pn5',
            '1s78fry',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '13kzqr3',
          source: 'ft.pigs3',
          target: 'ft.houseEvents',
          label: '[...]',
          points: [
            [
              781,
              835,
            ],
            [
              766,
              853,
            ],
            [
              753,
              873,
            ],
            [
              744,
              895,
            ],
            [
              734,
              919,
            ],
            [
              734,
              946,
            ],
            [
              738,
              972,
            ],
          ],
          labelBBox: {
            x: 745,
            y: 893,
            width: 25,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '8g9weh',
            't14e15',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: '3em6xb',
          source: 'ft.houseEvents',
          target: 'ft.pigs3',
          label: 'triggers',
          points: [
            [
              801,
              982,
            ],
            [
              816,
              939,
            ],
            [
              834,
              888,
            ],
            [
              849,
              844,
            ],
          ],
          labelBBox: {
            x: 832,
            y: 896,
            width: 51,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1ob520l',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: '18d872k',
          source: 'ft.redhood',
          target: 'ft.redhoodDb',
          label: '[...]',
          points: [
            [
              1320,
              835,
            ],
            [
              1314,
              876,
            ],
            [
              1307,
              924,
            ],
            [
              1301,
              966,
            ],
          ],
          labelBBox: {
            x: 1312,
            y: 893,
            width: 25,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1mtkvth',
            '1ytfpzl',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'oed4u0',
          source: 'ft.redhood',
          target: 'ft.wolfEvents',
          label: 'informs when wolf killed',
          points: [
            [
              1411,
              835,
            ],
            [
              1439,
              863,
            ],
            [
              1472,
              894,
            ],
            [
              1505,
              918,
            ],
            [
              1538,
              941,
            ],
            [
              1574,
              962,
            ],
            [
              1610,
              980,
            ],
          ],
          labelBBox: {
            x: 1506,
            y: 896,
            width: 152,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'oi9w9h',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: '1nxnqjc',
          source: 'ft.wolfEvents',
          target: 'ft.redhood',
          label: 'triggers',
          points: [
            [
              1764,
              982,
            ],
            [
              1741,
              951,
            ],
            [
              1713,
              919,
            ],
            [
              1682,
              895,
            ],
            [
              1633,
              858,
            ],
            [
              1574,
              828,
            ],
            [
              1519,
              805,
            ],
          ],
          labelBBox: {
            x: 1706,
            y: 896,
            width: 51,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1mf6tuc',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
      ],
    },
    'pigs3-index': {
      _type: 'element',
      tags: null,
      links: null,
      viewOf: 'ft.pigs3',
      _stage: 'layouted',
      sourcePath: 'views.c4',
      description: null,
      title: 'C4 / Components (The Three Little Pigs)',
      id: 'pigs3-index',
      autoLayout: {
        direction: 'TB',
      },
      notation: {
        nodes: [
          {
            title: 'Messaging System',
            shape: 'queue',
            color: 'secondary',
            kinds: [
              'messaging',
            ],
          },
          {
            title: 'Container',
            shape: 'rectangle',
            color: 'muted',
            kinds: [
              'container',
            ],
          },
          {
            title: 'Container',
            shape: 'rectangle',
            color: 'secondary',
            kinds: [
              'container',
            ],
          },
          {
            title: 'Software System',
            shape: 'rectangle',
            color: 'muted',
            kinds: [
              'system',
            ],
          },
          {
            title: 'Database',
            shape: 'storage',
            color: 'secondary',
            kinds: [
              'database',
            ],
          },
        ],
      },
      hash: '1Vo0zEdesF_yA0fjVq6-R_sgk49y-A92Dufl9ucanD4',
      bounds: {
        x: 0,
        y: 0,
        width: 2643,
        height: 1680,
      },
      nodes: [
        {
          id: 'ft',
          parent: null,
          level: 0,
          children: [
            'ft.monolith',
            'ft.houseEvents',
            'ft.redhood',
            'ft.pigs3',
            'ft.pigs3db',
          ],
          inEdges: [],
          outEdges: [],
          title: 'Fairy Tales',
          modelRef: 'ft',
          shape: 'rectangle',
          color: 'muted',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'System for interacting with The Three Little Pigs or Little Red Riding Hood',
          },
          tags: [
            'software-system',
          ],
          metadata: {
            owner: 'mat3e',
          },
          notation: 'Software System',
          kind: 'system',
          depth: 2,
          navigateTo: 'fairy-tales-index',
          x: 8,
          y: 8,
          width: 2627,
          height: 1664,
          labelBBox: {
            x: 6,
            y: 0,
            width: 76,
            height: 15,
          },
        },
        {
          id: 'ft.monolith',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [],
          outEdges: [
            '30c1jj',
            '1lcyo06',
            '1a37l74',
          ],
          title: 'Spring App',
          modelRef: 'ft.monolith',
          shape: 'rectangle',
          color: 'muted',
          icon: 'tech:spring-icon',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Entry point to the system, when CLI or HTTP mode can be chosen',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Spring',
          kind: 'container',
          x: 2001,
          y: 90,
          width: 360,
          height: 180,
          labelBBox: {
            x: 46,
            y: 47,
            width: 298,
            height: 84,
          },
        },
        {
          id: 'ft.houseEvents',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            'fb43qr',
            '1el5wh1',
          ],
          outEdges: [
            'e2lqtp',
          ],
          title: 'In-memory house events',
          modelRef: 'ft.houseEvents',
          shape: 'queue',
          color: 'secondary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Spring way of exchanging HouseEvents',
          },
          tags: [
            'container',
          ],
          notation: 'Messaging System',
          technology: 'Spring',
          kind: 'messaging',
          isCustomized: true,
          x: 2231,
          y: 1416,
          width: 364,
          height: 172,
          labelBBox: {
            x: 56,
            y: 42,
            width: 292,
            height: 85,
          },
        },
        {
          id: 'ft.redhood',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '30c1jj',
          ],
          outEdges: [],
          title: 'Little Red Riding Hood',
          modelRef: 'ft.redhood',
          shape: 'rectangle',
          color: 'muted',
          icon: 'tech:java',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'A fairy tale about listening to your mom, and not interacting with strangers',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Java',
          kind: 'container',
          navigateTo: 'redhood-index',
          x: 2231,
          y: 444,
          width: 353,
          height: 180,
          labelBBox: {
            x: 46,
            y: 37,
            width: 292,
            height: 102,
          },
        },
        {
          id: 'ft.pigs3',
          parent: 'ft',
          level: 1,
          children: [
            'ft.pigs3.cli',
            'ft.pigs3.rest',
            'ft.pigs3.event',
            'ft.pigs3.command',
            'ft.pigs3.query',
            'ft.pigs3.wolf',
            'ft.pigs3.factory',
            'ft.pigs3.repo',
            'ft.pigs3.blowing',
            'ft.pigs3.building',
            'ft.pigs3.house',
          ],
          inEdges: [
            '1lcyo06',
            '1a37l74',
            'e2lqtp',
          ],
          outEdges: [
            '1qsrjxk',
            'fb43qr',
            '1gmqeay',
            '1el5wh1',
          ],
          title: 'The Three Little Pigs',
          modelRef: 'ft.pigs3',
          shape: 'rectangle',
          color: 'secondary',
          icon: 'tech:java',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'A fairy tale about pigs building their houses',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Java',
          kind: 'container',
          depth: 1,
          isCustomized: true,
          x: 518,
          y: 361,
          width: 1673,
          height: 1271,
          labelBBox: {
            x: 6,
            y: 0,
            width: 136,
            height: 15,
          },
        },
        {
          id: 'ft.pigs3.cli',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1lcyo06',
          ],
          outEdges: [
            'bz9jgr',
          ],
          title: 'Command-Line Runner',
          modelRef: 'ft.pigs3.cli',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Runner printing a fairy tale in console',
          },
          tags: [],
          kind: 'component',
          x: 1791,
          y: 444,
          width: 330,
          height: 180,
          labelBBox: {
            x: 39,
            y: 65,
            width: 252,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.rest',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1a37l74',
          ],
          outEdges: [
            '1ip8fdp',
            '1cyenlc',
          ],
          title: 'REST Controller',
          modelRef: 'ft.pigs3.rest',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'HTTP endpoints for interacting with houses',
          },
          tags: [],
          kind: 'component',
          x: 807,
          y: 444,
          width: 366,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 291,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.event',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            'e2lqtp',
          ],
          outEdges: [
            '1rislfl',
            '19t0z3g',
          ],
          title: 'Event Handler',
          modelRef: 'ft.pigs3.event',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Executes commands based on incoming events',
          },
          tags: [],
          kind: 'component',
          x: 1283,
          y: 444,
          width: 397,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 322,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.command',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            'bz9jgr',
            '1ip8fdp',
            '1rislfl',
          ],
          outEdges: [
            '1eyujrz',
            '1i4ujo9',
            '1ez2vdx',
            '1bv3h0p',
          ],
          title: 'Command Handler',
          modelRef: 'ft.pigs3.command',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'App logic for driving domain logic',
          },
          tags: [],
          kind: 'component',
          x: 1429,
          y: 766,
          width: 330,
          height: 180,
          labelBBox: {
            x: 53,
            y: 65,
            width: 224,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.query',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1cyenlc',
            '19t0z3g',
          ],
          outEdges: [
            '1qsrjxk',
          ],
          title: 'Query Repository',
          modelRef: 'ft.pigs3.query',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Allows to find closest houses and read models',
          },
          tags: [],
          kind: 'component',
          x: 607,
          y: 766,
          width: 387,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 312,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.wolf',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1eyujrz',
          ],
          outEdges: [
            '124ho8e',
            '1r6a07w',
            'fb43qr',
          ],
          title: 'Wolf Service',
          modelRef: 'ft.pigs3.wolf',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Stateless work on house, encapsulating retrying logic',
          },
          tags: [],
          kind: 'component',
          x: 1807,
          y: 1089,
          width: 344,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 268,
            height: 65,
          },
        },
        {
          id: 'ft.pigs3.factory',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1i4ujo9',
          ],
          outEdges: [
            'bvfiqw',
            'wbnyii',
          ],
          title: 'House Factory',
          modelRef: 'ft.pigs3.factory',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Domain factory for creating house aggregate',
          },
          tags: [],
          kind: 'component',
          x: 558,
          y: 1089,
          width: 376,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 301,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.repo',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1ez2vdx',
          ],
          outEdges: [
            'tkc0k3',
            's94sh7',
            '1gmqeay',
          ],
          title: 'Repository',
          modelRef: 'ft.pigs3.repo',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Allows to find by ID and save houses',
          },
          tags: [],
          kind: 'component',
          x: 1044,
          y: 1089,
          width: 330,
          height: 180,
          labelBBox: {
            x: 40,
            y: 65,
            width: 249,
            height: 47,
          },
        },
        {
          id: 'ft.pigs3.blowing',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '124ho8e',
          ],
          outEdges: [],
          title: 'Blowing Down Specification',
          modelRef: 'ft.pigs3.blowing',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Rules on when house can be destroyed by blowing',
          },
          tags: [],
          kind: 'component',
          x: 1757,
          y: 1412,
          width: 363,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 288,
            height: 65,
          },
        },
        {
          id: 'ft.pigs3.building',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            'bvfiqw',
          ],
          outEdges: [],
          title: 'Building Policy',
          modelRef: 'ft.pigs3.building',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Rules on how to build house depending on the character of a pig',
          },
          tags: [],
          kind: 'component',
          x: 589,
          y: 1412,
          width: 388,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 313,
            height: 65,
          },
        },
        {
          id: 'ft.pigs3.house',
          parent: 'ft.pigs3',
          level: 2,
          children: [],
          inEdges: [
            '1bv3h0p',
            '1r6a07w',
            'wbnyii',
            'tkc0k3',
            's94sh7',
          ],
          outEdges: [
            '1el5wh1',
          ],
          title: 'House Aggregate',
          modelRef: 'ft.pigs3.house',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'DDD aggregate protecting rules about destroying and pig changes',
          },
          tags: [],
          kind: 'component',
          x: 1257,
          y: 1412,
          width: 332,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 257,
            height: 65,
          },
        },
        {
          id: 'ft.pigs3db',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1qsrjxk',
            '1gmqeay',
          ],
          outEdges: [],
          title: 'The Three Little Pigs H2 Database',
          modelRef: 'ft.pigs3db',
          shape: 'storage',
          color: 'secondary',
          icon: 'tech:mysql-icon',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'DB schema - houses',
          },
          tags: [
            'container',
          ],
          notation: 'Database',
          technology: 'Mysql',
          kind: 'database',
          isCustomized: true,
          x: 48,
          y: 1412,
          width: 430,
          height: 180,
          labelBBox: {
            x: 46,
            y: 55,
            width: 368,
            height: 67,
          },
        },
      ],
      edges: [
        {
          id: '30c1jj',
          source: 'ft.monolith',
          target: 'ft.redhood',
          label: 'interacts in HTTP mode via',
          points: [
            [
              2238,
              270,
            ],
            [
              2271,
              320,
            ],
            [
              2312,
              383,
            ],
            [
              2345,
              435,
            ],
          ],
          labelBBox: {
            x: 2289,
            y: 331,
            width: 173,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1l8dxr6',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1lcyo06',
          source: 'ft.monolith',
          target: 'ft.pigs3.cli',
          label: 'starts',
          points: [
            [
              2124,
              270,
            ],
            [
              2092,
              320,
            ],
            [
              2052,
              383,
            ],
            [
              2019,
              435,
            ],
          ],
          labelBBox: {
            x: 2083,
            y: 331,
            width: 38,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'sfdtp0',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1a37l74',
          source: 'ft.monolith',
          target: 'ft.pigs3.rest',
          label: 'interacts in HTTP mode via',
          points: [
            [
              2001,
              192,
            ],
            [
              1804,
              209,
            ],
            [
              1483,
              252,
            ],
            [
              1228,
              361,
            ],
            [
              1183,
              380,
            ],
            [
              1139,
              409,
            ],
            [
              1101,
              438,
            ],
          ],
          labelBBox: {
            x: 1302,
            y: 331,
            width: 173,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'vlcyf7',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'e2lqtp',
          source: 'ft.houseEvents',
          target: 'ft.pigs3.event',
          label: 'triggers',
          points: [
            [
              2396,
              1416,
            ],
            [
              2359,
              1247,
            ],
            [
              2249,
              868,
            ],
            [
              1999,
              684,
            ],
            [
              1902,
              613,
            ],
            [
              1851,
              657,
            ],
            [
              1736,
              624,
            ],
            [
              1721,
              619,
            ],
            [
              1705,
              615,
            ],
            [
              1690,
              610,
            ],
          ],
          labelBBox: {
            x: 2264,
            y: 1007,
            width: 51,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1ob520l',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: 'bz9jgr',
          source: 'ft.pigs3.cli',
          target: 'ft.pigs3.command',
          label: 'executes commands in order',
          points: [
            [
              1856,
              624,
            ],
            [
              1808,
              666,
            ],
            [
              1751,
              717,
            ],
            [
              1702,
              760,
            ],
          ],
          labelBBox: {
            x: 1787,
            y: 685,
            width: 184,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1438yba',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1ip8fdp',
          source: 'ft.pigs3.rest',
          target: 'ft.pigs3.command',
          label: 'creates/deletes houses via',
          points: [
            [
              979,
              623,
            ],
            [
              980,
              653,
            ],
            [
              987,
              684,
            ],
            [
              1006,
              706,
            ],
            [
              1060,
              769,
            ],
            [
              1266,
              810,
            ],
            [
              1419,
              833,
            ],
          ],
          labelBBox: {
            x: 1007,
            y: 685,
            width: 170,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1nhkxlt',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1cyenlc',
          source: 'ft.pigs3.rest',
          target: 'ft.pigs3.query',
          label: 'reads houses via',
          points: [
            [
              827,
              623,
            ],
            [
              808,
              641,
            ],
            [
              791,
              661,
            ],
            [
              779,
              684,
            ],
            [
              768,
              706,
            ],
            [
              766,
              732,
            ],
            [
              769,
              756,
            ],
          ],
          labelBBox: {
            x: 780,
            y: 685,
            width: 110,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1mb8ujx',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1eyujrz',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.wolf',
          label: 'destroys houses with',
          points: [
            [
              1648,
              946,
            ],
            [
              1667,
              975,
            ],
            [
              1692,
              1005,
            ],
            [
              1718,
              1029,
            ],
            [
              1742,
              1051,
            ],
            [
              1770,
              1071,
            ],
            [
              1798,
              1088,
            ],
          ],
          labelBBox: {
            x: 1719,
            y: 1007,
            width: 135,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1trm4au',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1i4ujo9',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.factory',
          label: 'creates new houses via',
          points: [
            [
              1429,
              915,
            ],
            [
              1352,
              942,
            ],
            [
              1259,
              975,
            ],
            [
              1176,
              1006,
            ],
            [
              1100,
              1035,
            ],
            [
              1017,
              1068,
            ],
            [
              944,
              1097,
            ],
          ],
          labelBBox: {
            x: 1177,
            y: 1007,
            width: 150,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1vkotia',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1ez2vdx',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.repo',
          label: 'reads and updates on diff via',
          points: [
            [
              1459,
              946,
            ],
            [
              1432,
              965,
            ],
            [
              1405,
              986,
            ],
            [
              1380,
              1006,
            ],
            [
              1352,
              1030,
            ],
            [
              1324,
              1057,
            ],
            [
              1299,
              1082,
            ],
          ],
          labelBBox: {
            x: 1381,
            y: 1007,
            width: 184,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '5gyi71',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1bv3h0p',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.house',
          label: 'changes pigs in',
          points: [
            [
              1597,
              946,
            ],
            [
              1596,
              973,
            ],
            [
              1594,
              1003,
            ],
            [
              1589,
              1029,
            ],
            [
              1564,
              1163,
            ],
            [
              1508,
              1309,
            ],
            [
              1468,
              1403,
            ],
          ],
          labelBBox: {
            x: 1575,
            y: 1169,
            width: 101,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'drhknn',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1rislfl',
          source: 'ft.pigs3.event',
          target: 'ft.pigs3.command',
          label: 'calls',
          points: [
            [
              1513,
              624,
            ],
            [
              1527,
              665,
            ],
            [
              1545,
              714,
            ],
            [
              1560,
              757,
            ],
          ],
          labelBBox: {
            x: 1542,
            y: 685,
            width: 32,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'bivr96',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '19t0z3g',
          source: 'ft.pigs3.event',
          target: 'ft.pigs3.query',
          label: 'finds house to escape via',
          points: [
            [
              1348,
              623,
            ],
            [
              1303,
              652,
            ],
            [
              1251,
              682,
            ],
            [
              1201,
              706,
            ],
            [
              1139,
              737,
            ],
            [
              1068,
              765,
            ],
            [
              1004,
              788,
            ],
          ],
          labelBBox: {
            x: 1242,
            y: 685,
            width: 162,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'ibams6',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '124ho8e',
          source: 'ft.pigs3.wolf',
          target: 'ft.pigs3.blowing',
          label: 'follows',
          points: [
            [
              1972,
              1269,
            ],
            [
              1969,
              1296,
            ],
            [
              1966,
              1325,
            ],
            [
              1963,
              1352,
            ],
            [
              1961,
              1368,
            ],
            [
              1958,
              1385,
            ],
            [
              1956,
              1402,
            ],
          ],
          labelBBox: {
            x: 1966,
            y: 1330,
            width: 47,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'ete0mv',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1r6a07w',
          source: 'ft.pigs3.wolf',
          target: 'ft.pigs3.house',
          label: 'tries to destroy',
          points: [
            [
              1807,
              1239,
            ],
            [
              1746,
              1263,
            ],
            [
              1679,
              1294,
            ],
            [
              1622,
              1329,
            ],
            [
              1609,
              1337,
            ],
            [
              1608,
              1342,
            ],
            [
              1596,
              1352,
            ],
            [
              1576,
              1369,
            ],
            [
              1555,
              1388,
            ],
            [
              1534,
              1405,
            ],
          ],
          labelBBox: {
            x: 1623,
            y: 1330,
            width: 96,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'zi1jl0',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'bvfiqw',
          source: 'ft.pigs3.factory',
          target: 'ft.pigs3.building',
          label: 'follows',
          points: [
            [
              756,
              1269,
            ],
            [
              761,
              1310,
            ],
            [
              767,
              1359,
            ],
            [
              772,
              1402,
            ],
          ],
          labelBBox: {
            x: 767,
            y: 1330,
            width: 47,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '14s2prz',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'wbnyii',
          source: 'ft.pigs3.factory',
          target: 'ft.pigs3.house',
          label: 'creates',
          points: [
            [
              934,
              1269,
            ],
            [
              1032,
              1316,
            ],
            [
              1151,
              1372,
            ],
            [
              1248,
              1418,
            ],
          ],
          labelBBox: {
            x: 1106,
            y: 1330,
            width: 50,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1csnvik',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'tkc0k3',
          source: 'ft.pigs3.repo',
          target: 'ft.pigs3.house',
          label: 'saves',
          points: [
            [
              1268,
              1269,
            ],
            [
              1296,
              1311,
            ],
            [
              1329,
              1361,
            ],
            [
              1358,
              1403,
            ],
          ],
          labelBBox: {
            x: 1323,
            y: 1330,
            width: 41,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1f0qxjk',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 's94sh7',
          source: 'ft.pigs3.repo',
          target: 'ft.pigs3.house',
          label: 'reads',
          points: [
            [
              1214,
              1269,
            ],
            [
              1219,
              1297,
            ],
            [
              1227,
              1327,
            ],
            [
              1242,
              1352,
            ],
            [
              1253,
              1371,
            ],
            [
              1268,
              1389,
            ],
            [
              1284,
              1405,
            ],
          ],
          labelBBox: {
            x: 1243,
            y: 1330,
            width: 39,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1fqpzn5',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1qsrjxk',
          source: 'ft.pigs3.query',
          target: 'ft.pigs3db',
          label: 'selects from',
          points: [
            [
              608,
              943,
            ],
            [
              541,
              980,
            ],
            [
              472,
              1029,
            ],
            [
              422,
              1089,
            ],
            [
              346,
              1180,
            ],
            [
              304,
              1311,
            ],
            [
              282,
              1401,
            ],
          ],
          labelBBox: {
            x: 423,
            y: 1169,
            width: 79,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1m16pn5',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'fb43qr',
          source: 'ft.pigs3.wolf',
          target: 'ft.houseEvents',
          label: 'informs when quitting',
          points: [
            [
              2099,
              1269,
            ],
            [
              2159,
              1313,
            ],
            [
              2230,
              1366,
            ],
            [
              2290,
              1410,
            ],
          ],
          labelBBox: {
            x: 2210,
            y: 1330,
            width: 136,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '8g9weh',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: '1gmqeay',
          source: 'ft.pigs3.repo',
          target: 'ft.pigs3db',
          label: 'select, insert, update',
          points: [
            [
              1044,
              1252,
            ],
            [
              1026,
              1258,
            ],
            [
              1007,
              1264,
            ],
            [
              989,
              1269,
            ],
            [
              821,
              1316,
            ],
            [
              767,
              1276,
            ],
            [
              601,
              1329,
            ],
            [
              539,
              1349,
            ],
            [
              475,
              1379,
            ],
            [
              420,
              1408,
            ],
          ],
          labelBBox: {
            x: 602,
            y: 1330,
            width: 133,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1s78fry',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1el5wh1',
          source: 'ft.pigs3.house',
          target: 'ft.houseEvents',
          label: 'informs about refugees',
          points: [
            [
              1589,
              1417,
            ],
            [
              1657,
              1388,
            ],
            [
              1736,
              1358,
            ],
            [
              1812,
              1343,
            ],
            [
              1957,
              1314,
            ],
            [
              2119,
              1362,
            ],
            [
              2238,
              1412,
            ],
          ],
          labelBBox: {
            x: 1813,
            y: 1330,
            width: 147,
            height: 18,
          },
          parent: 'ft',
          relations: [
            't14e15',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
      ],
    },
    'redhood-index': {
      _type: 'element',
      tags: null,
      links: null,
      viewOf: 'ft.redhood',
      _stage: 'layouted',
      sourcePath: 'views.c4',
      description: null,
      title: 'C4 / Components (Little Red Riding Hood)',
      id: 'redhood-index',
      autoLayout: {
        direction: 'TB',
      },
      notation: {
        nodes: [
          {
            title: 'Messaging System',
            shape: 'queue',
            color: 'secondary',
            kinds: [
              'messaging',
            ],
          },
          {
            title: 'Container',
            shape: 'rectangle',
            color: 'muted',
            kinds: [
              'container',
            ],
          },
          {
            title: 'Container',
            shape: 'rectangle',
            color: 'secondary',
            kinds: [
              'container',
            ],
          },
          {
            title: 'Software System',
            shape: 'rectangle',
            color: 'muted',
            kinds: [
              'system',
            ],
          },
          {
            title: 'Database',
            shape: 'storage',
            color: 'secondary',
            kinds: [
              'database',
            ],
          },
        ],
      },
      hash: 'rH3sblUp1kui2F7eNLdTegU8ykAKA8Z1NXkq96DmTyA',
      bounds: {
        x: 0,
        y: 0,
        width: 1711,
        height: 1977,
      },
      nodes: [
        {
          id: 'ft',
          parent: null,
          level: 0,
          children: [
            'ft.monolith',
            'ft.wolfEvents',
            'ft.pigs3',
            'ft.redhood',
            'ft.redhoodDb',
          ],
          inEdges: [],
          outEdges: [],
          title: 'Fairy Tales',
          modelRef: 'ft',
          shape: 'rectangle',
          color: 'muted',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'System for interacting with The Three Little Pigs or Little Red Riding Hood',
          },
          tags: [
            'software-system',
          ],
          metadata: {
            owner: 'mat3e',
          },
          notation: 'Software System',
          kind: 'system',
          depth: 2,
          navigateTo: 'fairy-tales-index',
          x: 8,
          y: 8,
          width: 1695,
          height: 1961,
          labelBBox: {
            x: 6,
            y: 0,
            width: 76,
            height: 15,
          },
        },
        {
          id: 'ft.monolith',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [],
          outEdges: [
            '1ohg55a',
            'pejjht',
          ],
          title: 'Spring App',
          modelRef: 'ft.monolith',
          shape: 'rectangle',
          color: 'muted',
          icon: 'tech:spring-icon',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Entry point to the system, when CLI or HTTP mode can be chosen',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Spring',
          kind: 'container',
          x: 960,
          y: 69,
          width: 360,
          height: 180,
          labelBBox: {
            x: 46,
            y: 46,
            width: 298,
            height: 85,
          },
        },
        {
          id: 'ft.wolfEvents',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1h23f57',
          ],
          outEdges: [
            'zd5m17',
          ],
          title: 'In-memory wolf events',
          modelRef: 'ft.wolfEvents',
          shape: 'queue',
          color: 'secondary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Spring way of exchanging WolfEvents',
          },
          tags: [
            'container',
          ],
          notation: 'Messaging System',
          technology: 'Spring',
          kind: 'messaging',
          isCustomized: true,
          x: 966,
          y: 1051,
          width: 395,
          height: 172,
          labelBBox: {
            x: 56,
            y: 51,
            width: 324,
            height: 67,
          },
        },
        {
          id: 'ft.pigs3',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1ohg55a',
          ],
          outEdges: [],
          title: 'The Three Little Pigs',
          modelRef: 'ft.pigs3',
          shape: 'rectangle',
          color: 'muted',
          icon: 'tech:java',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'A fairy tale about pigs building their houses',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Java',
          kind: 'container',
          navigateTo: 'pigs3-index',
          x: 978,
          y: 401,
          width: 324,
          height: 180,
          labelBBox: {
            x: 46,
            y: 46,
            width: 262,
            height: 85,
          },
        },
        {
          id: 'ft.redhood',
          parent: 'ft',
          level: 1,
          children: [
            'ft.redhood.rest',
            'ft.redhood.service',
            'ft.redhood.query',
            'ft.redhood.repo',
            'ft.redhood.wolf',
            'ft.redhood.meeting',
          ],
          inEdges: [
            'pejjht',
            'zd5m17',
          ],
          outEdges: [
            '1h23f57',
            '1gss7ag',
            '10zy62y',
          ],
          title: 'Little Red Riding Hood',
          modelRef: 'ft.redhood',
          shape: 'rectangle',
          color: 'secondary',
          icon: 'tech:java',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'A fairy tale about listening to your mom, and not interacting with strangers',
          },
          tags: [
            'container',
          ],
          notation: 'Container',
          links: [
            {
              url: 'https://github.com/mat3e/3pigs-ddd/',
              title: 'Repository',
            },
          ],
          technology: 'Java',
          kind: 'container',
          depth: 1,
          isCustomized: true,
          x: 48,
          y: 340,
          width: 878,
          height: 1589,
          labelBBox: {
            x: 6,
            y: 0,
            width: 145,
            height: 15,
          },
        },
        {
          id: 'ft.redhood.rest',
          parent: 'ft.redhood',
          level: 2,
          children: [],
          inEdges: [
            'pejjht',
          ],
          outEdges: [
            'evn62v',
            '19lm6nk',
          ],
          title: 'REST Controller',
          modelRef: 'ft.redhood.rest',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'HTTP endpoints for meeting and interacting with wolfs',
          },
          tags: [],
          kind: 'component',
          x: 498,
          y: 401,
          width: 370,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 294,
            height: 65,
          },
        },
        {
          id: 'ft.redhood.service',
          parent: 'ft.redhood',
          level: 2,
          children: [],
          inEdges: [
            'zd5m17',
            'evn62v',
          ],
          outEdges: [
            '11vxnj3',
            '11vvqsl',
            '1h23f57',
          ],
          title: 'Service',
          modelRef: 'ft.redhood.service',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Allows to create wolf, introduce people to wolf, and act on wolf death',
          },
          tags: [],
          kind: 'component',
          x: 88,
          y: 724,
          width: 352,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 277,
            height: 65,
          },
        },
        {
          id: 'ft.redhood.query',
          parent: 'ft.redhood',
          level: 2,
          children: [],
          inEdges: [
            '19lm6nk',
          ],
          outEdges: [
            '1gss7ag',
          ],
          title: 'Query Repository',
          modelRef: 'ft.redhood.query',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Allows to get wolf and its eaten people',
          },
          tags: [],
          kind: 'component',
          x: 550,
          y: 724,
          width: 335,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 259,
            height: 47,
          },
        },
        {
          id: 'ft.redhood.repo',
          parent: 'ft.redhood',
          level: 2,
          children: [],
          inEdges: [
            '11vxnj3',
          ],
          outEdges: [
            '1q9zqsw',
            '10zy62y',
          ],
          title: 'Repository',
          modelRef: 'ft.redhood.repo',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Allows to find by ID, save, and delete wolfs',
          },
          tags: [],
          kind: 'component',
          x: 492,
          y: 1047,
          width: 364,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 288,
            height: 47,
          },
        },
        {
          id: 'ft.redhood.wolf',
          parent: 'ft.redhood',
          level: 2,
          children: [],
          inEdges: [
            '11vvqsl',
            '1q9zqsw',
          ],
          outEdges: [
            '1pwhckh',
          ],
          title: 'Wolf',
          modelRef: 'ft.redhood.wolf',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Plans whom to meet, meets and eats people, can die from a bad meeitng',
          },
          tags: [],
          kind: 'component',
          x: 147,
          y: 1370,
          width: 380,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 304,
            height: 65,
          },
        },
        {
          id: 'ft.redhoodDb',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1gss7ag',
            '10zy62y',
          ],
          outEdges: [],
          title: 'Little Red Riding Hood H2 Database',
          modelRef: 'ft.redhoodDb',
          shape: 'storage',
          color: 'secondary',
          icon: 'tech:mysql-icon',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'DB schema - wolfs',
          },
          tags: [
            'container',
          ],
          notation: 'Database',
          technology: 'Mysql',
          kind: 'database',
          isCustomized: true,
          x: 1092,
          y: 1370,
          width: 446,
          height: 180,
          labelBBox: {
            x: 46,
            y: 55,
            width: 384,
            height: 66,
          },
        },
        {
          id: 'ft.redhood.meeting',
          parent: 'ft.redhood',
          level: 2,
          children: [],
          inEdges: [
            '1pwhckh',
          ],
          outEdges: [],
          title: 'Meeting Policy',
          modelRef: 'ft.redhood.meeting',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 10,
            size: 'md',
          },
          description: {
            txt: 'Provides consequences for wolf and person',
          },
          tags: [],
          kind: 'component',
          x: 151,
          y: 1709,
          width: 371,
          height: 180,
          labelBBox: {
            x: 39,
            y: 65,
            width: 295,
            height: 47,
          },
        },
      ],
      edges: [
        {
          id: '1ohg55a',
          source: 'ft.monolith',
          target: 'ft.pigs3',
          label: '[...]',
          points: [
            [
              1140,
              249,
            ],
            [
              1140,
              293,
            ],
            [
              1140,
              346,
            ],
            [
              1140,
              391,
            ],
          ],
          labelBBox: {
            x: 1141,
            y: 308,
            width: 25,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'sfdtp0',
            'vlcyf7',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'pejjht',
          source: 'ft.monolith',
          target: 'ft.redhood.rest',
          label: 'interacts in HTTP mode via',
          points: [
            [
              1003,
              249,
            ],
            [
              960,
              277,
            ],
            [
              914,
              309,
            ],
            [
              872,
              340,
            ],
            [
              848,
              357,
            ],
            [
              823,
              376,
            ],
            [
              800,
              395,
            ],
          ],
          labelBBox: {
            x: 916,
            y: 310,
            width: 173,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1l8dxr6',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: 'zd5m17',
          source: 'ft.wolfEvents',
          target: 'ft.redhood.service',
          label: 'triggers',
          points: [
            [
              1046,
              1051,
            ],
            [
              997,
              1019,
            ],
            [
              937,
              985,
            ],
            [
              879,
              964,
            ],
            [
              717,
              905,
            ],
            [
              662,
              949,
            ],
            [
              495,
              904,
            ],
            [
              480,
              900,
            ],
            [
              465,
              895,
            ],
            [
              449,
              890,
            ],
          ],
          labelBBox: {
            x: 930,
            y: 965,
            width: 51,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1mf6tuc',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: 'evn62v',
          source: 'ft.redhood.rest',
          target: 'ft.redhood.service',
          label: 'creates and meets wolf via',
          points: [
            [
              567,
              581,
            ],
            [
              511,
              624,
            ],
            [
              445,
              675,
            ],
            [
              388,
              718,
            ],
          ],
          labelBBox: {
            x: 487,
            y: 642,
            width: 170,
            height: 18,
          },
          parent: 'ft.redhood',
          relations: [
            'rzuezc',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '19lm6nk',
          source: 'ft.redhood.rest',
          target: 'ft.redhood.query',
          label: 'reads wolfs via',
          points: [
            [
              693,
              581,
            ],
            [
              697,
              622,
            ],
            [
              703,
              671,
            ],
            [
              707,
              714,
            ],
          ],
          labelBBox: {
            x: 703,
            y: 642,
            width: 97,
            height: 18,
          },
          parent: 'ft.redhood',
          relations: [
            '1dk8uvi',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '11vxnj3',
          source: 'ft.redhood.service',
          target: 'ft.redhood.repo',
          label: 'finds, updates, deletes',
          points: [
            [
              299,
              904,
            ],
            [
              314,
              933,
            ],
            [
              334,
              964,
            ],
            [
              358,
              987,
            ],
            [
              394,
              1020,
            ],
            [
              438,
              1048,
            ],
            [
              483,
              1069,
            ],
          ],
          labelBBox: {
            x: 359,
            y: 965,
            width: 144,
            height: 18,
          },
          parent: 'ft.redhood',
          relations: [
            '3o7wbn',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '11vvqsl',
          source: 'ft.redhood.service',
          target: 'ft.redhood.wolf',
          label: 'orchestrates domain logic in',
          points: [
            [
              253,
              904,
            ],
            [
              245,
              988,
            ],
            [
              238,
              1117,
            ],
            [
              257,
              1227,
            ],
            [
              264,
              1272,
            ],
            [
              280,
              1320,
            ],
            [
              295,
              1360,
            ],
          ],
          labelBBox: {
            x: 258,
            y: 1126,
            width: 178,
            height: 18,
          },
          parent: 'ft.redhood',
          relations: [
            '10en3so',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1q9zqsw',
          source: 'ft.redhood.repo',
          target: 'ft.redhood.wolf',
          label: 'reads, saves',
          points: [
            [
              531,
              1227,
            ],
            [
              506,
              1245,
            ],
            [
              481,
              1265,
            ],
            [
              460,
              1287,
            ],
            [
              437,
              1309,
            ],
            [
              416,
              1336,
            ],
            [
              398,
              1361,
            ],
          ],
          labelBBox: {
            x: 461,
            y: 1288,
            width: 83,
            height: 18,
          },
          parent: 'ft.redhood',
          relations: [
            'mpowqy',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1pwhckh',
          source: 'ft.redhood.wolf',
          target: 'ft.redhood.meeting',
          label: 'run meetings according to plan and met \nperson',
          points: [
            [
              337,
              1549,
            ],
            [
              337,
              1595,
            ],
            [
              337,
              1652,
            ],
            [
              337,
              1699,
            ],
          ],
          labelBBox: {
            x: 338,
            y: 1611,
            width: 250,
            height: 34,
          },
          parent: 'ft.redhood',
          relations: [
            '1uv3b7e',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '1h23f57',
          source: 'ft.redhood.service',
          target: 'ft.wolfEvents',
          label: 'informs when wolf killed',
          points: [
            [
              440,
              891,
            ],
            [
              518,
              924,
            ],
            [
              612,
              960,
            ],
            [
              698,
              987,
            ],
            [
              809,
              1022,
            ],
            [
              842,
              1011,
            ],
            [
              953,
              1047,
            ],
            [
              954,
              1047,
            ],
            [
              956,
              1048,
            ],
            [
              957,
              1048,
            ],
          ],
          labelBBox: {
            x: 699,
            y: 965,
            width: 152,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'oi9w9h',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'open',
          kind: 'async',
        },
        {
          id: '1gss7ag',
          source: 'ft.redhood.query',
          target: 'ft.redhoodDb',
          label: 'selects from',
          points: [
            [
              885,
              847,
            ],
            [
              1071,
              887,
            ],
            [
              1354,
              960,
            ],
            [
              1417,
              1047,
            ],
            [
              1484,
              1139,
            ],
            [
              1433,
              1270,
            ],
            [
              1382,
              1360,
            ],
          ],
          labelBBox: {
            x: 1450,
            y: 1126,
            width: 79,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1mtkvth',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
        {
          id: '10zy62y',
          source: 'ft.redhood.repo',
          target: 'ft.redhoodDb',
          label: 'select, insert, update, delete',
          points: [
            [
              852,
              1227,
            ],
            [
              939,
              1271,
            ],
            [
              1045,
              1323,
            ],
            [
              1133,
              1368,
            ],
          ],
          labelBBox: {
            x: 1015,
            y: 1288,
            width: 179,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '1ytfpzl',
          ],
          color: 'gray',
          line: 'solid',
          head: 'normal',
          isCustomized: true,
        },
      ],
    },
    'wolf-lifecycle': {
      _type: 'dynamic',
      tags: null,
      links: null,
      _stage: 'layouted',
      sourcePath: 'views.c4',
      description: null,
      title: 'Dynamic / Wolf lifecycle (Little Red Riding Hood)',
      id: 'wolf-lifecycle',
      variant: 'diagram',
      autoLayout: {
        direction: 'LR',
      },
      notation: {
        nodes: [
          {
            title: 'Person',
            shape: 'person',
            color: 'green',
            kinds: [
              'actor',
            ],
          },
          {
            title: 'Messaging System',
            shape: 'queue',
            color: 'primary',
            kinds: [
              'messaging',
            ],
          },
          {
            title: 'Database',
            shape: 'storage',
            color: 'primary',
            kinds: [
              'database',
            ],
          },
        ],
      },
      hash: 'MKlRF8GCQoX75dNrftN21InINJor44E_H1TeX06Z_ug',
      sequenceLayout: {
        actors: [
          {
            id: 'user',
            x: 0,
            y: 0,
            width: 320,
            height: 180,
            ports: [
              {
                id: 'step-01_source',
                cx: 160,
                cy: 306,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-06_source',
                cx: 160,
                cy: 561,
                height: 40,
                type: 'source',
                position: 'right',
              },
            ],
          },
          {
            id: 'ft.redhood.rest',
            x: 380,
            y: 0,
            width: 370,
            height: 180,
            ports: [
              {
                id: 'step-01_target',
                cx: 185,
                cy: 306,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-02_source',
                cx: 185,
                cy: 328,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-06_target',
                cx: 185,
                cy: 561,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-07_source',
                cx: 185,
                cy: 583,
                height: 40,
                type: 'source',
                position: 'right',
              },
            ],
          },
          {
            id: 'ft.redhood.service',
            x: 810,
            y: 0,
            width: 352,
            height: 180,
            ports: [
              {
                id: 'step-02_target',
                cx: 176,
                cy: 328,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-03_source',
                cx: 176,
                cy: 350,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-04_source',
                cx: 176,
                cy: 445,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-07_target',
                cx: 176,
                cy: 583,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-08_source',
                cx: 176,
                cy: 605,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-11_target',
                cx: 176,
                cy: 743,
                height: 24,
                type: 'target',
                position: 'right',
              },
              {
                id: 'step-12_source',
                cx: 176,
                cy: 838,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-17_source',
                cx: 176,
                cy: 1319,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-19_source',
                cx: 176,
                cy: 1436,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-20_target',
                cx: 176,
                cy: 1531,
                height: 24,
                type: 'target',
                position: 'right',
              },
              {
                id: 'step-21_source',
                cx: 176,
                cy: 1553,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-21_target',
                cx: 176,
                cy: 1670,
                height: 24,
                type: 'target',
                position: 'right',
              },
            ],
          },
          {
            id: 'ft.redhood.wolf',
            x: 1222,
            y: 0,
            width: 380,
            height: 180,
            ports: [
              {
                id: 'step-03_target',
                cx: 190,
                cy: 350,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-12_target',
                cx: 190,
                cy: 838,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-13_source',
                cx: 190,
                cy: 860,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-13_target',
                cx: 190,
                cy: 977,
                height: 24,
                type: 'target',
                position: 'right',
              },
              {
                id: 'step-14_source',
                cx: 190,
                cy: 999,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-15_target',
                cx: 190,
                cy: 1108,
                height: 24,
                type: 'target',
                position: 'right',
              },
              {
                id: 'step-16_source',
                cx: 190,
                cy: 1130,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-16_target',
                cx: 190,
                cy: 1261,
                height: 24,
                type: 'target',
                position: 'right',
              },
            ],
          },
          {
            id: 'ft.redhood.repo',
            x: 1662,
            y: 0,
            width: 364,
            height: 180,
            ports: [
              {
                id: 'step-04_target',
                cx: 182,
                cy: 445,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-05_source',
                cx: 182,
                cy: 467,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-08_target',
                cx: 182,
                cy: 605,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-09_source',
                cx: 182,
                cy: 627,
                height: 40,
                type: 'source',
                position: 'right',
              },
              {
                id: 'step-10_target',
                cx: 182,
                cy: 721,
                height: 24,
                type: 'target',
                position: 'right',
              },
              {
                id: 'step-11_source',
                cx: 182,
                cy: 743,
                height: 40,
                type: 'source',
                position: 'left',
              },
              {
                id: 'step-17_target',
                cx: 182,
                cy: 1319,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-18_source',
                cx: 182,
                cy: 1341,
                height: 40,
                type: 'source',
                position: 'right',
              },
            ],
          },
          {
            id: 'ft.redhoodDb',
            x: 2086,
            y: 0,
            width: 446,
            height: 180,
            ports: [
              {
                id: 'step-05_target',
                cx: 223,
                cy: 467,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-09_target',
                cx: 223,
                cy: 627,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-10_source',
                cx: 223,
                cy: 721,
                height: 40,
                type: 'source',
                position: 'left',
              },
              {
                id: 'step-18_target',
                cx: 223,
                cy: 1341,
                height: 24,
                type: 'target',
                position: 'left',
              },
            ],
          },
          {
            id: 'ft.redhood.meeting',
            x: 2592,
            y: 0,
            width: 371,
            height: 180,
            ports: [
              {
                id: 'step-14_target',
                cx: 186,
                cy: 999,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-15_source',
                cx: 186,
                cy: 1108,
                height: 40,
                type: 'source',
                position: 'left',
              },
            ],
          },
          {
            id: 'ft.wolfEvents',
            x: 3023,
            y: 4,
            width: 395,
            height: 172,
            ports: [
              {
                id: 'step-19_target',
                cx: 198,
                cy: 1432,
                height: 24,
                type: 'target',
                position: 'left',
              },
              {
                id: 'step-20_source',
                cx: 198,
                cy: 1527,
                height: 40,
                type: 'source',
                position: 'left',
              },
            ],
          },
        ],
        compounds: [],
        steps: [
          {
            id: 'step-01',
            sourceHandle: 'step-01_source',
            targetHandle: 'step-01_target',
            labelBBox: {
              width: 242,
              height: 29,
            },
          },
          {
            id: 'step-02',
            sourceHandle: 'step-02_source',
            targetHandle: 'step-02_target',
            labelBBox: {
              width: 145,
              height: 29,
            },
          },
          {
            id: 'step-03',
            sourceHandle: 'step-03_source',
            targetHandle: 'step-03_target',
            labelBBox: {
              width: 271,
              height: 29,
            },
          },
          {
            id: 'step-04',
            sourceHandle: 'step-04_source',
            targetHandle: 'step-04_target',
            labelBBox: {
              width: 110,
              height: 28,
            },
          },
          {
            id: 'step-05',
            sourceHandle: 'step-05_source',
            targetHandle: 'step-05_target',
            labelBBox: {
              width: 83,
              height: 28,
            },
          },
          {
            id: 'step-06',
            sourceHandle: 'step-06_source',
            targetHandle: 'step-06_target',
            labelBBox: {
              width: 246,
              height: 42,
            },
          },
          {
            id: 'step-07',
            sourceHandle: 'step-07_source',
            targetHandle: 'step-07_target',
            labelBBox: {
              width: 234,
              height: 29,
            },
          },
          {
            id: 'step-08',
            sourceHandle: 'step-08_source',
            targetHandle: 'step-08_target',
            labelBBox: {
              width: 232,
              height: 29,
            },
          },
          {
            id: 'step-09',
            sourceHandle: 'step-09_source',
            targetHandle: 'step-09_target',
            labelBBox: {
              width: 86,
              height: 28,
            },
          },
          {
            id: 'step-10',
            sourceHandle: 'step-10_source',
            targetHandle: 'step-10_target',
            labelBBox: {
              width: 140,
              height: 29,
            },
          },
          {
            id: 'step-11',
            sourceHandle: 'step-11_source',
            targetHandle: 'step-11_target',
            labelBBox: {
              width: 132,
              height: 29,
            },
          },
          {
            id: 'step-12',
            sourceHandle: 'step-12_source',
            targetHandle: 'step-12_target',
            labelBBox: {
              width: 149,
              height: 29,
            },
          },
          {
            id: 'step-13',
            sourceHandle: 'step-13_source',
            targetHandle: 'step-13_target',
            labelBBox: {
              width: 167,
              height: 29,
            },
          },
          {
            id: 'step-14',
            sourceHandle: 'step-14_source',
            targetHandle: 'step-14_target',
            labelBBox: {
              width: 284,
              height: 43,
            },
          },
          {
            id: 'step-15',
            sourceHandle: 'step-15_source',
            targetHandle: 'step-15_target',
            labelBBox: {
              width: 308,
              height: 29,
            },
          },
          {
            id: 'step-16',
            sourceHandle: 'step-16_source',
            targetHandle: 'step-16_target',
            labelBBox: {
              width: 265,
              height: 43,
            },
          },
          {
            id: 'step-17',
            sourceHandle: 'step-17_source',
            targetHandle: 'step-17_target',
            labelBBox: {
              width: 118,
              height: 29,
            },
          },
          {
            id: 'step-18',
            sourceHandle: 'step-18_source',
            targetHandle: 'step-18_target',
            labelBBox: {
              width: 100,
              height: 29,
            },
          },
          {
            id: 'step-19',
            sourceHandle: 'step-19_source',
            targetHandle: 'step-19_target',
            labelBBox: {
              width: 198,
              height: 29,
            },
          },
          {
            id: 'step-20',
            sourceHandle: 'step-20_source',
            targetHandle: 'step-20_target',
            labelBBox: {
              width: 191,
              height: 29,
            },
          },
          {
            id: 'step-21',
            sourceHandle: 'step-21_source',
            targetHandle: 'step-21_target',
            labelBBox: {
              width: 200,
              height: 29,
            },
          },
        ],
        parallelAreas: [],
        bounds: {
          x: 0,
          y: 0,
          width: 3418,
          height: 1712,
        },
      },
      bounds: {
        x: 0,
        y: 0,
        width: 3413,
        height: 1366,
      },
      nodes: [
        {
          id: 'user',
          parent: null,
          level: 0,
          children: [],
          inEdges: [],
          outEdges: [
            'step-01',
            'step-06',
          ],
          title: 'User',
          modelRef: 'user',
          shape: 'person',
          color: 'green',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'The one who wants to read fairy tales',
          },
          tags: [],
          notation: 'Person',
          kind: 'actor',
          x: 0,
          y: 728,
          width: 320,
          height: 180,
          labelBBox: {
            x: 33,
            y: 65,
            width: 253,
            height: 47,
          },
        },
        {
          id: 'ft.redhood.rest',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-01',
            'step-06',
          ],
          outEdges: [
            'step-02',
            'step-07',
          ],
          title: 'REST Controller',
          modelRef: 'ft.redhood.rest',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'HTTP endpoints for meeting and interacting with wolfs',
          },
          tags: [],
          kind: 'component',
          x: 683,
          y: 728,
          width: 370,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 294,
            height: 65,
          },
        },
        {
          id: 'ft.redhood.service',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-02',
            'step-07',
            'step-11',
            'step-20',
            'step-21',
          ],
          outEdges: [
            'step-03',
            'step-04',
            'step-08',
            'step-12',
            'step-17',
            'step-19',
            'step-21',
          ],
          title: 'Service',
          modelRef: 'ft.redhood.service',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Allows to create wolf, introduce people to wolf, and act on wolf death',
          },
          tags: [],
          kind: 'component',
          x: 1405,
          y: 728,
          width: 352,
          height: 180,
          labelBBox: {
            x: 37,
            y: 56,
            width: 277,
            height: 65,
          },
        },
        {
          id: 'ft.redhood.wolf',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-03',
            'step-12',
            'step-13',
            'step-15',
            'step-16',
          ],
          outEdges: [
            'step-13',
            'step-14',
            'step-16',
          ],
          title: 'Wolf',
          modelRef: 'ft.redhood.wolf',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Plans whom to meet, meets and eats people, can die from a bad meeitng',
          },
          tags: [],
          kind: 'component',
          x: 2153,
          y: 266,
          width: 380,
          height: 180,
          labelBBox: {
            x: 38,
            y: 56,
            width: 304,
            height: 65,
          },
        },
        {
          id: 'ft.redhood.repo',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-04',
            'step-08',
            'step-10',
            'step-17',
          ],
          outEdges: [
            'step-05',
            'step-09',
            'step-11',
            'step-18',
          ],
          title: 'Repository',
          modelRef: 'ft.redhood.repo',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Allows to find by ID, save, and delete wolfs',
          },
          tags: [],
          kind: 'component',
          x: 2161,
          y: 728,
          width: 364,
          height: 180,
          labelBBox: {
            x: 37,
            y: 65,
            width: 288,
            height: 47,
          },
        },
        {
          id: 'ft.redhoodDb',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-05',
            'step-09',
            'step-18',
          ],
          outEdges: [
            'step-10',
          ],
          title: 'Little Red Riding Hood H2 Database',
          modelRef: 'ft.redhoodDb',
          shape: 'storage',
          color: 'primary',
          icon: 'tech:mysql-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'DB schema - wolfs',
          },
          tags: [
            'container',
          ],
          notation: 'Database',
          technology: 'Mysql',
          kind: 'database',
          x: 2967,
          y: 767,
          width: 446,
          height: 180,
          labelBBox: {
            x: 45,
            y: 55,
            width: 385,
            height: 66,
          },
        },
        {
          id: 'ft.redhood.meeting',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-14',
          ],
          outEdges: [
            'step-15',
          ],
          title: 'Meeting Policy',
          modelRef: 'ft.redhood.meeting',
          shape: 'component',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Provides consequences for wolf and person',
          },
          tags: [],
          kind: 'component',
          x: 3004,
          y: 266,
          width: 371,
          height: 180,
          labelBBox: {
            x: 38,
            y: 65,
            width: 295,
            height: 47,
          },
        },
        {
          id: 'ft.wolfEvents',
          parent: null,
          level: 0,
          children: [],
          inEdges: [
            'step-19',
          ],
          outEdges: [
            'step-20',
          ],
          title: 'In-memory wolf events',
          modelRef: 'ft.wolfEvents',
          shape: 'queue',
          color: 'primary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Spring way of exchanging WolfEvents',
          },
          tags: [
            'container',
          ],
          notation: 'Messaging System',
          technology: 'Spring',
          kind: 'messaging',
          x: 2145,
          y: 1194,
          width: 395,
          height: 172,
          labelBBox: {
            x: 56,
            y: 51,
            width: 324,
            height: 66,
          },
        },
      ],
      edges: [
        {
          id: 'step-01',
          source: 'user',
          target: 'ft.redhood.rest',
          label: 'POST /wolfs - tells about people',
          points: [
            [
              320,
              818,
            ],
            [
              424,
              818,
            ],
            [
              562,
              818,
            ],
            [
              673,
              818,
            ],
          ],
          labelBBox: {
            x: 391,
            y: 785,
            width: 226,
            height: 21,
          },
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@0/source/source',
        },
        {
          id: 'step-02',
          source: 'ft.redhood.rest',
          target: 'ft.redhood.service',
          label: 'starts interaction',
          points: [
            [
              1053,
              818,
            ],
            [
              1158,
              818,
            ],
            [
              1289,
              818,
            ],
            [
              1394,
              818,
            ],
          ],
          labelBBox: {
            x: 1167,
            y: 785,
            width: 129,
            height: 21,
          },
          parent: null,
          relations: [
            'rzuezc',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@0/source',
        },
        {
          id: 'step-03',
          source: 'ft.redhood.service',
          target: 'ft.redhood.wolf',
          label: 'creates Wolf with plan whom to meet',
          points: [
            [
              1604,
              728,
            ],
            [
              1634,
              628,
            ],
            [
              1698,
              469,
            ],
            [
              1817,
              393,
            ],
            [
              1912,
              332,
            ],
            [
              2038,
              321,
            ],
            [
              2142,
              326,
            ],
          ],
          labelBBox: {
            x: 1826,
            y: 293,
            width: 255,
            height: 21,
          },
          parent: null,
          relations: [
            '10en3so',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@0',
        },
        {
          id: 'step-04',
          source: 'ft.redhood.service',
          target: 'ft.redhood.repo',
          label: 'saves Wolf',
          points: [
            [
              1738,
              728,
            ],
            [
              1763,
              717,
            ],
            [
              1790,
              707,
            ],
            [
              1817,
              701,
            ],
            [
              1933,
              673,
            ],
            [
              1968,
              675,
            ],
            [
              2085,
              701,
            ],
            [
              2110,
              706,
            ],
            [
              2136,
              714,
            ],
            [
              2161,
              724,
            ],
          ],
          labelBBox: {
            x: 1906,
            y: 649,
            width: 94,
            height: 20,
          },
          parent: null,
          relations: [
            '3o7wbn',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@1/source',
        },
        {
          id: 'step-05',
          source: 'ft.redhood.repo',
          target: 'ft.redhoodDb',
          label: 'inserts',
          points: [
            [
              2525,
              755,
            ],
            [
              2550,
              749,
            ],
            [
              2576,
              743,
            ],
            [
              2601,
              740,
            ],
            [
              2735,
              720,
            ],
            [
              2773,
              713,
            ],
            [
              2906,
              740,
            ],
            [
              2937,
              746,
            ],
            [
              2969,
              755,
            ],
            [
              2999,
              766,
            ],
          ],
          labelBBox: {
            x: 2722,
            y: 690,
            width: 67,
            height: 20,
          },
          parent: null,
          relations: [
            '1ytfpzl',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@1',
        },
        {
          id: 'step-06',
          source: 'user',
          target: 'ft.redhood.rest',
          label: 'PUT /wolfs/{id}/meetings/recent - \ndecides who meets Wolf',
          points: [
            [
              320,
              877,
            ],
            [
              340,
              882,
            ],
            [
              360,
              887,
            ],
            [
              380,
              890,
            ],
            [
              487,
              907,
            ],
            [
              516,
              906,
            ],
            [
              623,
              890,
            ],
            [
              639,
              888,
            ],
            [
              656,
              885,
            ],
            [
              673,
              881,
            ],
          ],
          labelBBox: {
            x: 389,
            y: 849,
            width: 230,
            height: 34,
          },
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source/source/source/source/source/source/source',
        },
        {
          id: 'step-07',
          source: 'ft.redhood.rest',
          target: 'ft.redhood.service',
          label: 'passes person to meet by Wolf',
          points: [
            [
              1053,
              873,
            ],
            [
              1073,
              877,
            ],
            [
              1093,
              881,
            ],
            [
              1113,
              883,
            ],
            [
              1215,
              897,
            ],
            [
              1242,
              897,
            ],
            [
              1344,
              883,
            ],
            [
              1361,
              881,
            ],
            [
              1378,
              878,
            ],
            [
              1394,
              874,
            ],
          ],
          labelBBox: {
            x: 1122,
            y: 851,
            width: 218,
            height: 21,
          },
          parent: null,
          relations: [
            'rzuezc',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source/source/source/source/source/source',
        },
        {
          id: 'step-08',
          source: 'ft.redhood.service',
          target: 'ft.redhood.repo',
          label: 'looks for Wolf with an identifier',
          points: [
            [
              1757,
              818,
            ],
            [
              1874,
              818,
            ],
            [
              2029,
              818,
            ],
            [
              2150,
              818,
            ],
          ],
          labelBBox: {
            x: 1845,
            y: 785,
            width: 216,
            height: 21,
          },
          parent: null,
          relations: [
            '3o7wbn',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source/source/source/source/source',
        },
        {
          id: 'step-09',
          source: 'ft.redhood.repo',
          target: 'ft.redhoodDb',
          label: 'selects',
          points: [
            [
              2525,
              826,
            ],
            [
              2650,
              832,
            ],
            [
              2819,
              840,
            ],
            [
              2955,
              846,
            ],
          ],
          labelBBox: {
            x: 2721,
            y: 798,
            width: 70,
            height: 20,
          },
          parent: null,
          relations: [
            '1ytfpzl',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source/source/source/source',
        },
        {
          id: 'step-10',
          source: 'ft.redhoodDb',
          target: 'ft.redhood.repo',
          label: 'provides result',
          points: [
            [
              2535,
              893,
            ],
            [
              2557,
              899,
            ],
            [
              2579,
              905,
            ],
            [
              2601,
              908,
            ],
            [
              2720,
              929,
            ],
            [
              2855,
              919,
            ],
            [
              2966,
              903,
            ],
          ],
          labelBBox: {
            x: 2694,
            y: 876,
            width: 124,
            height: 21,
          },
          dir: 'back',
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source/source/source',
        },
        {
          id: 'step-11',
          source: 'ft.redhood.repo',
          target: 'ft.redhood.service',
          label: 'restores Wolf',
          points: [
            [
              1767,
              874,
            ],
            [
              1784,
              878,
            ],
            [
              1800,
              881,
            ],
            [
              1817,
              883,
            ],
            [
              1935,
              900,
            ],
            [
              1967,
              898,
            ],
            [
              2085,
              883,
            ],
            [
              2109,
              880,
            ],
            [
              2135,
              876,
            ],
            [
              2161,
              870,
            ],
          ],
          labelBBox: {
            x: 1895,
            y: 851,
            width: 116,
            height: 21,
          },
          dir: 'back',
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source/source',
        },
        {
          id: 'step-12',
          source: 'ft.redhood.service',
          target: 'ft.redhood.wolf',
          label: 'starts a meeting',
          points: [
            [
              1675,
              728,
            ],
            [
              1717,
              691,
            ],
            [
              1767,
              648,
            ],
            [
              1817,
              616,
            ],
            [
              1919,
              548,
            ],
            [
              2042,
              486,
            ],
            [
              2143,
              440,
            ],
          ],
          labelBBox: {
            x: 1887,
            y: 436,
            width: 133,
            height: 21,
          },
          parent: null,
          relations: [
            '10en3so',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source/source',
        },
        {
          id: 'step-13',
          source: 'ft.redhood.wolf',
          target: 'ft.redhood.wolf',
          label: 'proceeds with plan',
          points: [
            [
              2309,
              266,
            ],
            [
              2300,
              209,
            ],
            [
              2312,
              156,
            ],
            [
              2343,
              156,
            ],
            [
              2372,
              156,
            ],
            [
              2384,
              203,
            ],
            [
              2378,
              255,
            ],
          ],
          labelBBox: {
            x: 2270,
            y: 123,
            width: 151,
            height: 21,
          },
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source/source',
        },
        {
          id: 'step-14',
          source: 'ft.redhood.wolf',
          target: 'ft.redhood.meeting',
          label: 'chooses policy for actual and planned \nperson',
          points: [
            [
              2532,
              356,
            ],
            [
              2670,
              356,
            ],
            [
              2855,
              356,
            ],
            [
              2994,
              356,
            ],
          ],
          labelBBox: {
            x: 2622,
            y: 314,
            width: 268,
            height: 35,
          },
          parent: null,
          relations: [
            '1uv3b7e',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source/source',
        },
        {
          id: 'step-15',
          source: 'ft.redhood.meeting',
          target: 'ft.redhood.wolf',
          label: 'provides consequences and eaten people',
          points: [
            [
              2543,
              412,
            ],
            [
              2562,
              416,
            ],
            [
              2582,
              419,
            ],
            [
              2601,
              421,
            ],
            [
              2735,
              438,
            ],
            [
              2771,
              437,
            ],
            [
              2906,
              421,
            ],
            [
              2938,
              418,
            ],
            [
              2972,
              412,
            ],
            [
              3004,
              405,
            ],
          ],
          labelBBox: {
            x: 2610,
            y: 389,
            width: 292,
            height: 21,
          },
          dir: 'back',
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2/source',
        },
        {
          id: 'step-16',
          source: 'ft.redhood.wolf',
          target: 'ft.redhood.wolf',
          label: 'potentially dies and records this as \nevent',
          points: [
            [
              2288,
              266,
            ],
            [
              2251,
              164,
            ],
            [
              2269,
              46,
            ],
            [
              2343,
              46,
            ],
            [
              2414,
              46,
            ],
            [
              2434,
              156,
            ],
            [
              2400,
              256,
            ],
          ],
          labelBBox: {
            x: 2221,
            y: 4,
            width: 249,
            height: 35,
          },
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@2',
        },
        {
          id: 'step-17',
          source: 'ft.redhood.service',
          target: 'ft.redhood.repo',
          label: 'saves Wolf',
          points: [
            [
              1702,
              907,
            ],
            [
              1737,
              929,
            ],
            [
              1777,
              949,
            ],
            [
              1817,
              960,
            ],
            [
              1932,
              992,
            ],
            [
              1969,
              990,
            ],
            [
              2085,
              960,
            ],
            [
              2124,
              950,
            ],
            [
              2164,
              932,
            ],
            [
              2201,
              913,
            ],
          ],
          labelBBox: {
            x: 1902,
            y: 928,
            width: 102,
            height: 21,
          },
          parent: null,
          relations: [
            '3o7wbn',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@3/source',
        },
        {
          id: 'step-18',
          source: 'ft.redhood.repo',
          target: 'ft.redhoodDb',
          label: 'updates',
          points: [
            [
              2451,
              907,
            ],
            [
              2494,
              938,
            ],
            [
              2547,
              969,
            ],
            [
              2601,
              985,
            ],
            [
              2731,
              1024,
            ],
            [
              2774,
              1014,
            ],
            [
              2906,
              985,
            ],
            [
              2944,
              977,
            ],
            [
              2982,
              964,
            ],
            [
              3018,
              949,
            ],
          ],
          labelBBox: {
            x: 2714,
            y: 953,
            width: 84,
            height: 21,
          },
          parent: null,
          relations: [
            '1ytfpzl',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@3',
        },
        {
          id: 'step-19',
          source: 'ft.redhood.service',
          target: 'ft.wolfEvents',
          label: 'informs about killed wolf',
          points: [
            [
              1658,
              907,
            ],
            [
              1701,
              954,
            ],
            [
              1758,
              1010,
            ],
            [
              1817,
              1049,
            ],
            [
              1915,
              1116,
            ],
            [
              2035,
              1170,
            ],
            [
              2135,
              1209,
            ],
          ],
          labelBBox: {
            x: 1862,
            y: 1017,
            width: 182,
            height: 21,
          },
          parent: null,
          relations: [
            'oi9w9h',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'normal',
          tags: [],
          kind: 'async',
          astPath: '/steps@4/source/source',
        },
        {
          id: 'step-20',
          source: 'ft.wolfEvents',
          target: 'ft.redhood.service',
          label: 'triggers event handling',
          points: [
            [
              1605,
              917,
            ],
            [
              1635,
              1020,
            ],
            [
              1698,
              1177,
            ],
            [
              1817,
              1252,
            ],
            [
              1913,
              1313,
            ],
            [
              2040,
              1321,
            ],
            [
              2145,
              1313,
            ],
          ],
          labelBBox: {
            x: 1866,
            y: 1220,
            width: 175,
            height: 21,
          },
          dir: 'back',
          parent: null,
          relations: [
            '1mf6tuc',
          ],
          color: 'gray',
          line: 'dotted',
          head: 'normal',
          tags: [],
          kind: 'async',
          astPath: '/steps@4/source',
        },
        {
          id: 'step-21',
          source: 'ft.redhood.service',
          target: 'ft.redhood.service',
          label: 'prints who was rescured',
          points: [
            [
              1519,
              728,
            ],
            [
              1504,
              671,
            ],
            [
              1525,
              618,
            ],
            [
              1581,
              618,
            ],
            [
              1633,
              618,
            ],
            [
              1654,
              665,
            ],
            [
              1644,
              717,
            ],
          ],
          labelBBox: {
            x: 1491,
            y: 585,
            width: 184,
            height: 21,
          },
          parent: null,
          relations: [],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
          tags: [],
          astPath: '/steps@4',
        },
      ],
    },
  },
  deployments: {
    elements: {},
    relations: {},
  },
  imports: {},
  manualLayouts: {},
} as any) as any

/* prettier-ignore-end */
