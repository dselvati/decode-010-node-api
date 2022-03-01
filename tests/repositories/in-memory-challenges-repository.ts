import { ChallengesRepository } from '../../src/application/repositories/ChallengesRepository'
import { Challenge } from '../../src/domain/entities/challenge'

export class InMemoryChallengesRepostory implements ChallengesRepository {

  public items: Challenge[] = []


  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(challenge => challenge.id)

    if (!challenge) {
      return null
    }

    return challenge
  }
}