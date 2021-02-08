# Usando ButtonComponent

Existem 3 formas de usar o ButtonComponent, quando tiver dois botões na tela, quando tiver um unico botão com tamanho médio, e quando tiver um único botão mais largo.

## Dois botões na tela

```typescript
<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
  <ButtonComponent size={'s'} disabled={false} mainButton={true} text={'Botão s 1'} onPress={onPress} />
  <ButtonComponent size={'s'} disabled={true} mainButton={false} text={'Botão s 2'} onPress={onPress} />
</View>
```

## Um botão médio

```typescript
<ButtonComponent size={'m'} disabled={false} mainButton={true} text={'Botão médio'} onPress={onPress} />
```

## Um botão largo

```typescript
<ButtonComponent size={'l'} disabled={false} mainButton={true} text={'Botão largo'} onPress={onPress} />
```
