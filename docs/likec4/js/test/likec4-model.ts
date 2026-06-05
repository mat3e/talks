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
  | "ft.inMemBus"
  | "ft.monolith"
  | "ft.pigs3"
  | "ft.pigs3db"
  | "ft.redhood"
  | "ft.redhoodDb"
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
  | "ft.pigs3.wolf",
  // Deployments
  never,
  // Views
  | "fairy-tales-index"
  | "index"
  | "pigs3-index",
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
        style: {},
      },
    },
    relationships: {
      async: {
        style: {
          line: 'dashed',
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
      summary: {
        txt: 'A fairy tale about pigs building their houses',
      },
      technology: 'Java',
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
    'ft.inMemBus': {
      notation: 'Messaging System',
      style: {
        shape: 'queue',
        icon: 'tech:spring-icon',
      },
      tags: [
        'container',
      ],
      summary: {
        txt: 'Spring way of exchanging events',
      },
      technology: 'Spring',
      title: 'In-memory events support',
      kind: 'messaging',
      id: 'ft.inMemBus',
    },
    'ft.pigs3.cli': {
      style: {},
      summary: {
        txt: 'Runner printing a fairy tale in console',
      },
      title: 'Command-Line Runner',
      kind: 'component',
      id: 'ft.pigs3.cli',
    },
    'ft.pigs3.rest': {
      style: {},
      summary: {
        txt: 'HTTP endpoints for interacting with houses',
      },
      title: 'REST Controller',
      kind: 'component',
      id: 'ft.pigs3.rest',
    },
    'ft.pigs3.command': {
      style: {},
      summary: {
        txt: 'App logic for driving domain logic',
      },
      title: 'Command Handler',
      kind: 'component',
      id: 'ft.pigs3.command',
    },
    'ft.pigs3.event': {
      style: {},
      summary: {
        txt: 'Executes commands based on incomming events',
      },
      title: 'Event Handler',
      kind: 'component',
      id: 'ft.pigs3.event',
    },
    'ft.pigs3.query': {
      style: {},
      summary: {
        txt: 'Allows to find closest houses and read models',
      },
      title: 'Query Repository',
      kind: 'component',
      id: 'ft.pigs3.query',
    },
    'ft.pigs3.wolf': {
      style: {},
      summary: {
        txt: 'Stateless work on house, encapsulating retrying logic',
      },
      title: 'Wolf Service',
      kind: 'component',
      id: 'ft.pigs3.wolf',
    },
    'ft.pigs3.factory': {
      style: {},
      summary: {
        txt: 'Domain factory for creating house aggregate',
      },
      title: 'House Factory',
      kind: 'component',
      id: 'ft.pigs3.factory',
    },
    'ft.pigs3.repo': {
      style: {},
      summary: {
        txt: 'Allows to find by ID and save houses',
      },
      title: 'Repository',
      kind: 'component',
      id: 'ft.pigs3.repo',
    },
    'ft.pigs3.blowing': {
      style: {},
      summary: {
        txt: 'Rules on when house can be destroyed by blowing',
      },
      title: 'Blowing Down Specification',
      kind: 'component',
      id: 'ft.pigs3.blowing',
    },
    'ft.pigs3.building': {
      style: {},
      summary: {
        txt: 'Rules on how to build house depending on the character of a pig',
      },
      title: 'Building Policy',
      kind: 'component',
      id: 'ft.pigs3.building',
    },
    'ft.pigs3.house': {
      style: {},
      summary: {
        txt: 'DDD aggregate protecting rules about destroying and pig changes',
      },
      title: 'House Aggregate',
      kind: 'component',
      id: 'ft.pigs3.house',
    },
  },
  relations: {
    ilosru: {
      title: 'interacts',
      source: {
        model: 'user',
      },
      target: {
        model: 'ft.monolith',
      },
      id: 'ilosru',
    },
    rmbal4: {
      title: '',
      source: {
        model: 'ft.monolith',
      },
      target: {
        model: 'ft.pigs3',
      },
      id: 'rmbal4',
    },
    '1k54s52': {
      title: '',
      source: {
        model: 'ft.monolith',
      },
      target: {
        model: 'ft.redhood',
      },
      id: '1k54s52',
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
      title: 'creates new via',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.factory',
      },
      id: '1vkotia',
    },
    dbf7j9: {
      title: 'destroys with',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.wolf',
      },
      id: 'dbf7j9',
    },
    '1trpny4': {
      title: 'updates on diff',
      source: {
        model: 'ft.pigs3.command',
      },
      target: {
        model: 'ft.pigs3.repo',
      },
      id: '1trpny4',
    },
    ibams6: {
      title: 'finds house to escape',
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
    jddavc: {
      line: 'dashed',
      head: 'open',
      title: 'triggers',
      source: {
        model: 'ft.inMemBus',
      },
      target: {
        model: 'ft.pigs3.event',
      },
      kind: 'async',
      id: 'jddavc',
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
    drb7tg: {
      line: 'dashed',
      head: 'open',
      title: 'informs when quitting',
      source: {
        model: 'ft.pigs3.wolf',
      },
      target: {
        model: 'ft.inMemBus',
      },
      kind: 'async',
      id: 'drb7tg',
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
      title: 'inserts/updates',
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
    '16eakd0': {
      line: 'dashed',
      head: 'open',
      title: 'informs about refugees',
      source: {
        model: 'ft.pigs3.house',
      },
      target: {
        model: 'ft.inMemBus',
      },
      kind: 'async',
      id: '16eakd0',
    },
  },
  globals: {
    predicates: {},
    dynamicPredicates: {},
    styles: {},
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
      hash: 'fqBqtx9xb_PotjL8fPK1BwoB5K-y2b5Qvp4fh5IimAo',
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
          label: 'interacts',
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
            width: 57,
            height: 18,
          },
          parent: null,
          relations: [
            'ilosru',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
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
      title: 'Containers',
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
        ],
      },
      hash: 'I1sc8_zEy7U0yRmoZ8uL9DkhJ71ujyGlfg2gB_RoEmw',
      bounds: {
        x: 0,
        y: 0,
        width: 884,
        height: 883,
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
          x: 273,
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
          width: 868,
          height: 604,
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
          x: 253,
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
          ],
          outEdges: [],
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
          x: 48,
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
          ],
          outEdges: [],
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
          x: 482,
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
      ],
      edges: [
        {
          id: '1k9jmjh',
          source: 'user',
          target: 'ft.monolith',
          label: 'interacts',
          points: [
            [
              433,
              180,
            ],
            [
              433,
              224,
            ],
            [
              433,
              277,
            ],
            [
              433,
              322,
            ],
          ],
          labelBBox: {
            x: 434,
            y: 241,
            width: 57,
            height: 18,
          },
          parent: null,
          relations: [
            'ilosru',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1ohg55a',
          source: 'ft.monolith',
          target: 'ft.pigs3',
          label: '[...]',
          points: [
            [
              371,
              512,
            ],
            [
              342,
              554,
            ],
            [
              307,
              604,
            ],
            [
              278,
              647,
            ],
          ],
          labelBBox: {
            x: 329,
            y: 571,
            width: 25,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'rmbal4',
            'sfdtp0',
            'vlcyf7',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '30c1jj',
          source: 'ft.monolith',
          target: 'ft.redhood',
          label: null,
          points: [
            [
              496,
              512,
            ],
            [
              525,
              554,
            ],
            [
              560,
              604,
            ],
            [
              590,
              647,
            ],
          ],
          labelBBox: null,
          parent: 'ft',
          relations: [
            '1k54s52',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
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
      title: 'Components',
      id: 'pigs3-index',
      autoLayout: {
        direction: 'TB',
      },
      notation: {
        nodes: [
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
        ],
      },
      hash: 'pXQW6z4MRuha1yVzPZWN04dfolWGjJvwrUEuIaG-xHM',
      bounds: {
        x: 0,
        y: 0,
        width: 1837,
        height: 1680,
      },
      nodes: [
        {
          id: 'ft',
          parent: null,
          level: 0,
          children: [
            'ft.monolith',
            'ft.inMemBus',
            'ft.redhood',
            'ft.pigs3',
          ],
          inEdges: [],
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
          depth: 2,
          navigateTo: 'fairy-tales-index',
          x: 8,
          y: 8,
          width: 1821,
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
          x: 966,
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
          id: 'ft.inMemBus',
          parent: 'ft',
          level: 1,
          children: [],
          inEdges: [
            '1ht512m',
            'jdljy0',
          ],
          outEdges: [
            '1f4idm8',
          ],
          title: 'In-memory events support',
          modelRef: 'ft.inMemBus',
          shape: 'queue',
          color: 'primary',
          icon: 'tech:spring-icon',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Spring way of exchanging events',
          },
          tags: [
            'container',
          ],
          notation: 'Messaging System',
          technology: 'Spring',
          kind: 'messaging',
          x: 1410,
          y: 1416,
          width: 376,
          height: 172,
          labelBBox: {
            x: 56,
            y: 51,
            width: 304,
            height: 67,
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
          x: 1435,
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
            '1f4idm8',
          ],
          outEdges: [
            '1ht512m',
            'jdljy0',
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
          depth: 1,
          x: 48,
          y: 361,
          width: 1317,
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
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Runner printing a fairy tale in console',
          },
          tags: [],
          kind: 'component',
          x: 88,
          y: 444,
          width: 320,
          height: 180,
          labelBBox: {
            x: 34,
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
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'HTTP endpoints for interacting with houses',
          },
          tags: [],
          kind: 'component',
          x: 518,
          y: 444,
          width: 326,
          height: 180,
          labelBBox: {
            x: 18,
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
            '1f4idm8',
          ],
          outEdges: [
            '1rislfl',
            '19t0z3g',
          ],
          title: 'Event Handler',
          modelRef: 'ft.pigs3.event',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Executes commands based on incomming events',
          },
          tags: [],
          kind: 'component',
          x: 955,
          y: 444,
          width: 370,
          height: 180,
          labelBBox: {
            x: 18,
            y: 65,
            width: 334,
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
          ],
          title: 'Command Handler',
          modelRef: 'ft.pigs3.command',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'App logic for driving domain logic',
          },
          tags: [],
          kind: 'component',
          x: 407,
          y: 766,
          width: 320,
          height: 180,
          labelBBox: {
            x: 48,
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
          outEdges: [],
          title: 'Query Repository',
          modelRef: 'ft.pigs3.query',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Allows to find closest houses and read models',
          },
          tags: [],
          kind: 'component',
          x: 884,
          y: 766,
          width: 347,
          height: 180,
          labelBBox: {
            x: 18,
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
            '1ht512m',
          ],
          title: 'Wolf Service',
          modelRef: 'ft.pigs3.wolf',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Stateless work on house, encapsulating retrying logic',
          },
          tags: [],
          kind: 'component',
          x: 976,
          y: 1089,
          width: 320,
          height: 180,
          labelBBox: {
            x: 26,
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
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Domain factory for creating house aggregate',
          },
          tags: [],
          kind: 'component',
          x: 100,
          y: 1089,
          width: 336,
          height: 180,
          labelBBox: {
            x: 18,
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
            '12z32xy',
          ],
          title: 'Repository',
          modelRef: 'ft.pigs3.repo',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Allows to find by ID and save houses',
          },
          tags: [],
          kind: 'component',
          x: 546,
          y: 1089,
          width: 320,
          height: 180,
          labelBBox: {
            x: 35,
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
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Rules on when house can be destroyed by blowing',
          },
          tags: [],
          kind: 'component',
          x: 976,
          y: 1412,
          width: 323,
          height: 180,
          labelBBox: {
            x: 18,
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
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'Rules on how to build house depending on the character of a pig',
          },
          tags: [],
          kind: 'component',
          x: 88,
          y: 1412,
          width: 348,
          height: 180,
          labelBBox: {
            x: 18,
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
            '1r6a07w',
            'wbnyii',
            '12z32xy',
          ],
          outEdges: [
            'jdljy0',
          ],
          title: 'House Aggregate',
          modelRef: 'ft.pigs3.house',
          shape: 'rectangle',
          color: 'primary',
          style: {
            opacity: 15,
            size: 'md',
          },
          description: {
            txt: 'DDD aggregate protecting rules about destroying and pig changes',
          },
          tags: [],
          kind: 'component',
          x: 546,
          y: 1412,
          width: 320,
          height: 180,
          labelBBox: {
            x: 32,
            y: 56,
            width: 257,
            height: 65,
          },
        },
      ],
      edges: [
        {
          id: '30c1jj',
          source: 'ft.monolith',
          target: 'ft.redhood',
          label: null,
          points: [
            [
              1269,
              270,
            ],
            [
              1309,
              299,
            ],
            [
              1352,
              331,
            ],
            [
              1392,
              361,
            ],
            [
              1424,
              386,
            ],
            [
              1459,
              412,
            ],
            [
              1491,
              437,
            ],
          ],
          labelBBox: null,
          parent: 'ft',
          relations: [
            '1k54s52',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1lcyo06',
          source: 'ft.monolith',
          target: 'ft.pigs3.cli',
          label: 'starts',
          points: [
            [
              966,
              208,
            ],
            [
              824,
              233,
            ],
            [
              623,
              281,
            ],
            [
              463,
              361,
            ],
            [
              423,
              381,
            ],
            [
              384,
              409,
            ],
            [
              350,
              437,
            ],
          ],
          labelBBox: {
            x: 516,
            y: 331,
            width: 38,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'sfdtp0',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1a37l74',
          source: 'ft.monolith',
          target: 'ft.pigs3.rest',
          label: 'interacts in HTTP mode via',
          points: [
            [
              1023,
              270,
            ],
            [
              983,
              299,
            ],
            [
              940,
              331,
            ],
            [
              900,
              361,
            ],
            [
              868,
              386,
            ],
            [
              833,
              412,
            ],
            [
              801,
              437,
            ],
          ],
          labelBBox: {
            x: 941,
            y: 331,
            width: 173,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'vlcyf7',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1f4idm8',
          source: 'ft.inMemBus',
          target: 'ft.pigs3.event',
          label: 'triggers',
          points: [
            [
              1575,
              1416,
            ],
            [
              1531,
              1262,
            ],
            [
              1426,
              930,
            ],
            [
              1271,
              684,
            ],
            [
              1260,
              666,
            ],
            [
              1246,
              648,
            ],
            [
              1232,
              631,
            ],
          ],
          labelBBox: {
            x: 1442,
            y: 1007,
            width: 51,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'jddavc',
          ],
          color: 'gray',
          line: 'dashed',
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
              249,
              623,
            ],
            [
              253,
              652,
            ],
            [
              262,
              683,
            ],
            [
              279,
              706,
            ],
            [
              309,
              747,
            ],
            [
              353,
              777,
            ],
            [
              398,
              800,
            ],
          ],
          labelBBox: {
            x: 280,
            y: 685,
            width: 184,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1438yba',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1ip8fdp',
          source: 'ft.pigs3.rest',
          target: 'ft.pigs3.command',
          label: 'creates/deletes houses via',
          points: [
            [
              543,
              623,
            ],
            [
              525,
              641,
            ],
            [
              509,
              661,
            ],
            [
              498,
              684,
            ],
            [
              487,
              707,
            ],
            [
              490,
              733,
            ],
            [
              499,
              757,
            ],
          ],
          labelBBox: {
            x: 499,
            y: 685,
            width: 170,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1nhkxlt',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1cyenlc',
          source: 'ft.pigs3.rest',
          target: 'ft.pigs3.query',
          label: 'reads houses via',
          points: [
            [
              786,
              624,
            ],
            [
              835,
              666,
            ],
            [
              895,
              717,
            ],
            [
              946,
              760,
            ],
          ],
          labelBBox: {
            x: 882,
            y: 685,
            width: 110,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1mb8ujx',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1eyujrz',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.wolf',
          label: 'destroys with',
          points: [
            [
              725,
              946,
            ],
            [
              801,
              989,
            ],
            [
              892,
              1041,
            ],
            [
              970,
              1084,
            ],
          ],
          labelBBox: {
            x: 870,
            y: 1007,
            width: 86,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'dbf7j9',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1i4ujo9',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.factory',
          label: 'creates new via',
          points: [
            [
              484,
              946,
            ],
            [
              445,
              988,
            ],
            [
              398,
              1039,
            ],
            [
              358,
              1082,
            ],
          ],
          labelBBox: {
            x: 427,
            y: 1007,
            width: 101,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1vkotia',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1ez2vdx',
          source: 'ft.pigs3.command',
          target: 'ft.pigs3.repo',
          label: 'updates on diff',
          points: [
            [
              606,
              946,
            ],
            [
              624,
              988,
            ],
            [
              645,
              1037,
            ],
            [
              663,
              1080,
            ],
          ],
          labelBBox: {
            x: 642,
            y: 1007,
            width: 96,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1trpny4',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1rislfl',
          source: 'ft.pigs3.event',
          target: 'ft.pigs3.command',
          label: 'calls',
          points: [
            [
              955,
              606,
            ],
            [
              903,
              628,
            ],
            [
              847,
              655,
            ],
            [
              797,
              684,
            ],
            [
              758,
              706,
            ],
            [
              719,
              734,
            ],
            [
              683,
              761,
            ],
          ],
          labelBBox: {
            x: 798,
            y: 685,
            width: 32,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'bivr96',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '19t0z3g',
          source: 'ft.pigs3.event',
          target: 'ft.pigs3.query',
          label: 'finds house to escape',
          points: [
            [
              1117,
              624,
            ],
            [
              1107,
              665,
            ],
            [
              1094,
              714,
            ],
            [
              1083,
              757,
            ],
          ],
          labelBBox: {
            x: 1102,
            y: 685,
            width: 140,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'ibams6',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '124ho8e',
          source: 'ft.pigs3.wolf',
          target: 'ft.pigs3.blowing',
          label: 'follows',
          points: [
            [
              1137,
              1269,
            ],
            [
              1137,
              1310,
            ],
            [
              1137,
              1359,
            ],
            [
              1137,
              1402,
            ],
          ],
          labelBBox: {
            x: 1138,
            y: 1330,
            width: 47,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'ete0mv',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1r6a07w',
          source: 'ft.pigs3.wolf',
          target: 'ft.pigs3.house',
          label: 'tries to destroy',
          points: [
            [
              976,
              1247,
            ],
            [
              958,
              1254,
            ],
            [
              939,
              1262,
            ],
            [
              921,
              1269,
            ],
            [
              855,
              1296,
            ],
            [
              823,
              1279,
            ],
            [
              773,
              1329,
            ],
            [
              753,
              1349,
            ],
            [
              739,
              1376,
            ],
            [
              729,
              1403,
            ],
          ],
          labelBBox: {
            x: 774,
            y: 1330,
            width: 96,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            'zi1jl0',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: 'bvfiqw',
          source: 'ft.pigs3.factory',
          target: 'ft.pigs3.building',
          label: 'follows',
          points: [
            [
              266,
              1269,
            ],
            [
              266,
              1310,
            ],
            [
              265,
              1359,
            ],
            [
              264,
              1402,
            ],
          ],
          labelBBox: {
            x: 266,
            y: 1330,
            width: 47,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '14s2prz',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: 'wbnyii',
          source: 'ft.pigs3.factory',
          target: 'ft.pigs3.house',
          label: 'creates',
          points: [
            [
              389,
              1269,
            ],
            [
              448,
              1312,
            ],
            [
              517,
              1363,
            ],
            [
              576,
              1406,
            ],
          ],
          labelBBox: {
            x: 501,
            y: 1330,
            width: 50,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1csnvik',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '12z32xy',
          source: 'ft.pigs3.repo',
          target: 'ft.pigs3.house',
          label: '[...]',
          points: [
            [
              700,
              1269,
            ],
            [
              699,
              1289,
            ],
            [
              698,
              1310,
            ],
            [
              697,
              1329,
            ],
            [
              696,
              1353,
            ],
            [
              697,
              1378,
            ],
            [
              698,
              1402,
            ],
          ],
          labelBBox: {
            x: 698,
            y: 1328,
            width: 25,
            height: 18,
          },
          parent: 'ft.pigs3',
          relations: [
            '1f0qxjk',
            '1fqpzn5',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'normal',
        },
        {
          id: '1ht512m',
          source: 'ft.pigs3.wolf',
          target: 'ft.inMemBus',
          label: 'informs when quitting',
          points: [
            [
              1264,
              1269,
            ],
            [
              1327,
              1313,
            ],
            [
              1404,
              1366,
            ],
            [
              1468,
              1410,
            ],
          ],
          labelBBox: {
            x: 1382,
            y: 1330,
            width: 136,
            height: 18,
          },
          parent: 'ft',
          relations: [
            'drb7tg',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'open',
          kind: 'async',
        },
        {
          id: 'jdljy0',
          source: 'ft.pigs3.house',
          target: 'ft.inMemBus',
          label: 'informs about refugees',
          points: [
            [
              827,
              1412,
            ],
            [
              872,
              1384,
            ],
            [
              924,
              1357,
            ],
            [
              976,
              1343,
            ],
            [
              1040,
              1325,
            ],
            [
              1060,
              1334,
            ],
            [
              1126,
              1343,
            ],
            [
              1247,
              1358,
            ],
            [
              1276,
              1372,
            ],
            [
              1392,
              1412,
            ],
            [
              1395,
              1413,
            ],
            [
              1398,
              1414,
            ],
            [
              1401,
              1415,
            ],
          ],
          labelBBox: {
            x: 977,
            y: 1330,
            width: 147,
            height: 18,
          },
          parent: 'ft',
          relations: [
            '16eakd0',
          ],
          color: 'gray',
          line: 'dashed',
          head: 'open',
          kind: 'async',
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
