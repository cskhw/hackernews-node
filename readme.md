### 프리즈마 학습용 레포지토리

# 출처

<a href="https://velog.io/@cadenzah/graphql-node-01-introduction">cadenzah.log</a>

# 필요 파일

```ini
prisma/prisma.yml
prisma/datamodel.prisma
```

# 부가 학습 링크

<a href="https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e">그래프ql 스키마, 해석기 설명</a>

# prisma 설치

```ini
yarn global add prisma
```

# prisma 초기화

```ini
# 이번 학습에선 실행시키지 않음
prsima init
```

# prisma 연동

```ini
prisma deploy
```

# prisma 클라이언트 생성

```ini
prsima generate
```

3번 데모 서버 실행 -> 엔터엔터엔터~~

구조 이해

# 리졸버의 4개의 인자: root, args, context, info
```ini
# root: parent, window와 같이 최상위 객체
# args: 전해진 인자
# context: 전해진 인자를 저장하고 반환할 객체
# nfo: 쿼리에 대한 설명
# 예시 코드
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => { 
      return context.prisma.links()        
    },                                     
  },
  Mutation: {                              
    post: (root, args, context) => {       
      return context.prisma.createLink({   
        url: args.url,                     
        description: args.description,     
      })                                   
    },                                     
  },                                       
}                                          
```

