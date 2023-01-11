import { RequestContextService } from '../application/context/AppRequestContext';
import { v4 } from 'uuid';
import { ArgumentNotProvidedException } from '../exceptions';
import { Guard } from '../guard';

export type CommandProps<T> = Omit<T, 'id' | 'metadata'> & Partial<Command>;

type CommandMetadata = {
  readonly correlationId: string;

  readonly causationId?: string;

  readonly userId?: string;

  readonly timestamp: number;
};

export class Command {
  readonly id: string;

  readonly metadata: CommandMetadata;

  constructor(props: CommandProps<unknown>) {
    if (Guard.isEmpty(props)) {
      throw new ArgumentNotProvidedException('Command props should not be empty');
    }
    const ctx = RequestContextService.getContext();
    this.id = props.id || v4();
    this.metadata = {
      correlationId: props?.metadata?.correlationId || ctx.requestId,
      causationId: props?.metadata?.causationId,
      timestamp: props?.metadata?.timestamp || Date.now(),
      userId: props?.metadata?.userId,
    };
  }
}
