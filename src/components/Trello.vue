<template>
  <div class="Trello">
    <div class="lane">
      <h2 class="lane_title">Backlog</h2>
      <Container
        group-name="trello"
        @drag-start="handleDragStart ('backlog', $event)"
        @drop="handleDrop ('backlog', $event)"
        :get-child-payload="getChildPlayload"
        :drop-placeholder="{className: 'placeholder'}"
      >
        <Draggable v-for="card in cards.backlog" :key="card.id">
          <card>
            {{ card.Text }}
          </card>
        </Draggable>
      </Container>
    </div>
    <div class="lane">
      <h2 class="lane_title">Desenvolvimento</h2>
      <Container
        group-name="trello" 
        @drag-start="handleDragStart ('dev', $event)"
        @drop="handleDrop ('dev', $event)"
        :get-child-payload="getChildPlayload"
        :drop-placeholder="{className: 'placeholder'}"
      >
        <Draggable v-for="card in cards.dev" :key="card.id">
          <card>
            {{ card.Text }}
          </card>
        </Draggable>
      </Container>
    </div>
    <div class="lane">
      <h2 class="lane_title">Testes</h2>
      <Container
        group-name="trello"
        @drag-start="handleDragStart ('testes', $event)"
        @drop="handleDrop ('testes', $event)"
        :get-child-payload="getChildPlayload"
        :drop-placeholder="{className: 'placeholder'}"
      >
        <Draggable v-for="card in cards.testes" :key="card.id">
          <card>
            {{ card.Text }}
          </card>
        </Draggable>
      </Container>
    </div>
    <div class="lane">
      <h2 class="lane_title">Fechados</h2>
      <Container
        group-name="trello"
        @drag-start="handleDragStart ('fechados', $event)"
        @drop="handleDrop ('fechados', $event)"
        :get-child-payload="getChildPlayload"
        :drop-placeholder="{className: 'placeholder'}"
      >
        <Draggable v-for="card in cards.fechados" :key="card.id">
          <card>
            {{ card.Text }}
          </card>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { Container, Draggable } from "vue-smooth-dnd";
import initialCards from "./initialCards"

export default {
  components: {
    Card,
    Container,
    Draggable,
  },
  name: "TreLlo",
  data: () => ({
    cards: {
      backlog: initialCards.backlog,
      dev: initialCards.dev,
      testes: initialCards.testes,
      fechados: [],
    },
    draggingCard: {
      lane: "",
      index: -1,
      cardData: {},
    }
  }),
  methods: {
    handleDragStar(lane, dragResult) {
      const { payload, isSource } = dragResult;
      if (isSource) {
        this.draggingCard = {
          lane,
          index: payload.index,
          cardData: {
            ...this.cards[lane][payload.index]
          },
        };
      }
    },
    handleDrop(lane, dropResult) {
      const {removedIndex, addedIndex} = dropResult;
      if (lane === this.draggingCard.lane && removedIndex === addedIndex) {
        return;
      }

      if (removedIndex !== null) {
        this.cards[lane].splice(removedIndex, 1);
      }

      if (addedIndex !== null) {
        this.cards[lane].splice(addedIndex, 0, this.draggingCard.cardData);
      }
    },
    getChildPlayload(index) {
      return {
        index,
      };
    },
  },
};
</script>

<style scoped>
.Trello {
  display: flex;
  padding-top: 50px;
  align-items: flex-start;
  justify-content: flex-start;
}
.lane {
  background-color: #f6f6f6;
  width: 23rem;
  border-radius: 0.8rem;
  margin: 0 0.8rem;
  padding: 0 0.7rem;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(33, 33, 33);
}
.lane_title {
  font-family: Nunito;
  padding: 0.8rem 0.5rem;
  margin-top: 0;
  margin-bottom: 0.6rem;
}
.placeholder {
  background: rgba(33, 33, 33, 0.08);
  border-radius: .4rem;
}
</style>
